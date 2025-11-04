# i18n Kurulum Rehberi

## Paketleri Yükleme

Terminal'de aşağıdaki komutu çalıştırın:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

## Kurulum Tamamlandı!

i18n başarıyla projenize eklendi. Şu özellikler aktif:

### ✅ Özellikler

- **Türkçe ve İngilizce** dil desteği
- **Otomatik dil algılama** (tarayıcı diline göre)
- **LocalStorage'da dil tercihi saklama**
- **Sağ üst köşede dil değiştirici butonlar**

### 📁 Oluşturulan Dosyalar

- `src/i18n/config.js` - i18n yapılandırma dosyası
- `src/i18n/locales/tr.json` - Türkçe çeviriler
- `src/i18n/locales/en.json` - İngilizce çeviriler

### 🔧 Nasıl Kullanılır?

1. **Yeni çeviri eklemek için:**
   - `src/i18n/locales/tr.json` ve `src/i18n/locales/en.json` dosyalarına yeni anahtarlar ekleyin
   - Örnek: `"yeniText": "Yeni Metin"` (tr.json) ve `"yeniText": "New Text"` (en.json)

2. **Kod içinde kullanmak için:**
   ```jsx
   const { t } = useTranslation();
   <p>{t('yeniText')}</p>
   ```

3. **Dil eklemek için:**
   - Yeni bir JSON dosyası oluşturun (örn: `de.json` için Almanca)
   - `src/i18n/config.js` dosyasına yeni dili ekleyin

### 🌐 Mevcut Çeviri Anahtarları

- `personal.title`, `personal.bio`, `personal.about`
- `sections.about`, `sections.skills`, `sections.projects`, `sections.experience`, `sections.contact`
- `stats.projectsCompleted`, `stats.gamesPublished`, `stats.yearsExperience`, `stats.technologies`
- `buttons.downloadCV`, `buttons.contact`, `buttons.details`, `buttons.send`
- `form.name`, `form.email`, `form.message` ve placeholder'ları
- `types.game`, `types.tool`, `types.other`, `types.work`, `types.education`
- `footer.rights`, `footer.builtWith`

### 📝 Notlar

- Dil değiştirici sağ üst köşede yer alıyor
- Seçilen dil localStorage'da saklanıyor
- Varsayılan dil Türkçe (tr)
