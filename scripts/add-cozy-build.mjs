#!/usr/bin/env node
// Unity WebGL build'ini siteye ekler: public/play/cozy-hustle/ altına kopyalar
// ve build-config.js dosyasını dosya adlarıyla yeniden yazar.
//
// Kullanım:
//   npm run cozy:build -- "C:\yol\unity-webgl-build-klasoru"
// Klasör, Unity'nin çıkardığı kök klasör (içinde Build/ olan) ya da doğrudan Build/ olabilir.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'public', 'play', 'cozy-hustle');

const MB = 1024 * 1024;
const GITHUB_HARD_LIMIT = 100 * MB; // GitHub bu boyutun üstündeki dosyaları reddeder
const GITHUB_WARN_LIMIT = 50 * MB;

function fail(msg) {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

const input = process.argv[2];
if (!input) fail('Unity build klasörünün yolunu ver:\n  npm run cozy:build -- "C:\\yol\\build-klasoru"');

let src = path.resolve(input);
if (!fs.existsSync(src)) fail(`Klasör bulunamadı: ${src}`);

let buildDir = path.join(src, 'Build');
if (!fs.existsSync(buildDir)) {
  if (path.basename(src).toLowerCase() === 'build') {
    buildDir = src;
    src = path.dirname(src);
  } else {
    fail(`İçinde "Build" klasörü yok: ${src}`);
  }
}

const files = fs.readdirSync(buildDir);
const loader = files.find((f) => f.endsWith('.loader.js'));
if (!loader) fail(`Build klasöründe *.loader.js yok: ${buildDir}`);
const base = loader.slice(0, -'.loader.js'.length);

const pick = (kind) => {
  const match = files.find((f) => f.startsWith(`${base}.${kind}`) && !f.endsWith('.loader.js'));
  return match || null;
};
const data = pick('data');
const framework = pick('framework.js');
const wasm = pick('wasm');
const symbols = files.find((f) => f.startsWith(`${base}.symbols.json`)) || null;
if (!data || !framework || !wasm) fail(`Eksik build dosyası (data / framework.js / wasm) bulunamadı: ${buildDir}`);

// GitHub Pages, .gz/.br dosyalarına Content-Encoding başlığı eklemez.
// Bu yüzden ya sıkıştırma kapalı olmalı ya da "Decompression Fallback" açık olmalı (.unityweb uzantısı).
const compressed = [data, framework, wasm].filter((f) => /\.(gz|br)$/.test(f));
if (compressed.length) {
  fail(
    `Build ${compressed[0].endsWith('.br') ? 'Brotli' : 'Gzip'} ile sıkıştırılmış ama "Decompression Fallback" kapalı.\n` +
      '  GitHub Pages bu dosyaları doğru sunamaz. Unity\'de:\n' +
      '  Player Settings > Publishing Settings > Decompression Fallback = AÇIK\n' +
      '  (Compression Format: Gzip önerilir) ve tekrar build al.'
  );
}

// Boyut kontrolü
let total = 0;
const walk = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else {
      total += st.size;
      if (st.size > GITHUB_HARD_LIMIT) fail(`${name} ${(st.size / MB).toFixed(1)} MB. GitHub 100 MB üstü dosyayı kabul etmez.`);
      if (st.size > GITHUB_WARN_LIMIT) console.warn(`⚠ ${name} ${(st.size / MB).toFixed(1)} MB: büyük, mobilde yavaş yüklenebilir.`);
    }
  }
};
walk(buildDir);
const streamingSrc = path.join(src, 'StreamingAssets');
if (fs.existsSync(streamingSrc)) walk(streamingSrc);

// Unity'nin kendi index.html'inden ürün bilgilerini oku (varsa)
let meta = {};
const unityIndex = path.join(src, 'index.html');
if (fs.existsSync(unityIndex)) {
  const html = fs.readFileSync(unityIndex, 'utf8');
  for (const key of ['companyName', 'productName', 'productVersion']) {
    const m = html.match(new RegExp(`${key}\\s*:\\s*"([^"]*)"`));
    if (m) meta[key] = m[1];
  }
}

// Eski build'i temizle, yenisini kopyala
for (const dir of ['Build', 'StreamingAssets']) {
  fs.rmSync(path.join(target, dir), { recursive: true, force: true });
}
fs.cpSync(buildDir, path.join(target, 'Build'), { recursive: true });
if (fs.existsSync(streamingSrc)) fs.cpSync(streamingSrc, path.join(target, 'StreamingAssets'), { recursive: true });

const config = {
  version: new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14),
  loaderUrl: `Build/${loader}`,
  dataUrl: `Build/${data}`,
  frameworkUrl: `Build/${framework}`,
  codeUrl: `Build/${wasm}`,
  ...(symbols ? { symbolsUrl: `Build/${symbols}` } : {}),
  ...meta,
};

fs.writeFileSync(
  path.join(target, 'build-config.js'),
  `// Otomatik yazıldı: npm run cozy:build\nwindow.COZY_BUILD = ${JSON.stringify(config, null, 2)};\n`
);

console.log(`\n✔ Cozy Hustle build eklendi (${(total / MB).toFixed(1)} MB)`);
console.log(`  Sürüm: ${config.version}`);
console.log('  Yerelde test: npm run dev  →  http://localhost:5173/play/cozy-hustle/');
console.log('  Yayında:                     https://chadgineer.dev/play/cozy-hustle/\n');
