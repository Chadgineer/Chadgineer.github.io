# Cozy Hustle Web Build

Oyunun adresi: **https://chadgineer.dev/play/cozy-hustle/**

Bu sayfaya sitede hiçbir yerden link verilmez ve sayfa `noindex` olduğu için Google'da çıkmaz. Sadece linki gönderdiğin kişiler girebilir.
Not: Bu bir şifre değildir. Linki bilen herkes oyunu açabilir.

## Unity'de build ayarları

**File > Build Settings > Web (WebGL)**, sonra **Player Settings > Publishing Settings**:

| Ayar | Değer | Neden |
| --- | --- | --- |
| Compression Format | **Gzip** | Küçük dosya, hızlı indirme |
| Decompression Fallback | **Açık** | GitHub Pages sıkıştırma başlığı göndermez; bu olmadan oyun açılmaz |
| Data Caching | Açık | Tekrar açılışta yeniden indirmez |

**Player Settings > Resolution and Presentation**: hazır şablonu (template) seçmen önemli değil. Siteye sadece `Build/` (ve varsa `StreamingAssets/`) klasörü alınır. Sayfa dikey telefona göre hazır.

Oyun içi UI için Canvas Scaler'ı **Scale With Screen Size**, referans çözünürlüğü dikey (ör. 1080x1920) ve **Match = 0.5** civarı ayarla, çünkü telefonların en-boy oranları farklı.

## Build'i siteye ekleme

1. Unity'de build al (örneğin `C:\Builds\CozyHustleWeb` klasörüne).
2. Bu klasörde çalıştır:

   ```bash
   npm run cozy:build -- "C:\Builds\CozyHustleWeb"
   ```

   Script dosyaları `public/play/cozy-hustle/` içine kopyalar, eski build'i siler ve sürüm numarasını günceller. Böylece test edenler yeni sürümü görür, tarayıcı önbelleğindeki eskisini değil.
3. Yerelde dene: `npm run dev` ve http://localhost:5173/play/cozy-hustle/
4. Commit et ve push et. Birkaç dakika sonra yayında olur.

## Sınırlar

- GitHub tek dosyada **100 MB** üstünü kabul etmez. Script bunu kontrol eder, 50 MB üstünde uyarır.
- Mobil tarayıcıda ilk açılış build boyutuna bağlı. 20-30 MB altı rahat açılır.
- iPhone'da tarayıcının adres çubuğu tam gizlenmez. Tam ekran için testerlara: Safari'de **Paylaş > Ana Ekrana Ekle**, Android Chrome'da **Ana ekrana ekle**. Böylece uygulama gibi tam ekran ve dikey açılır.
- Telefon yan çevrilirse "telefonu dik tut" uyarısı çıkar.
