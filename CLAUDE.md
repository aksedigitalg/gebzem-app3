# Sehir Uygulamasi PWA

## Proje
- Sehir uygulamasi anasayfasi (tek sayfa)
- React + Vite + PWA
- Dil: Turkce (UI ve yorumlar)

## Renk Paleti
- Siyah: #000000
- Beyaz: #FFFFFF
- Acik Gri: #F2F2F2
- Orta Gri: #999999
- Koyu Gri: #333333

## Kurallar
- Ikon kutuphanesi: SADECE lucide-react (baska ikon kaynagi yok, emoji yok)
- Stil: CSS Modules (her component kendi module.css dosyasi)
- Font: Inter (Google Fonts)
- Mobil oncelikli tasarim (375px baz)
- Mock data ayri dosyada (src/data/mockData.js)
- Her component kendi klasorunde (jsx + module.css)
- Framework/kutuphane ekleme: tailwind yok, styled-components yok
- PWA: vite-plugin-pwa

## Component Yapisi
```
src/components/
  Header/Header.jsx + Header.module.css
  SearchBar/SearchBar.jsx + SearchBar.module.css
  QuickAccess/QuickAccess.jsx + QuickAccess.module.css
  NewsSection/NewsSection.jsx + NewsSection.module.css
  EventsSection/EventsSection.jsx + EventsSection.module.css
  BottomNav/BottomNav.jsx + BottomNav.module.css
```

## Lucide Ikonlar (sadece bunlar kullanilacak)
Bell, User, Search, Newspaper, CalendarDays, Bus, CloudSun, ShieldAlert, MapPin, Clock, ChevronRight, Home, Compass, Map, Megaphone, CircleUserRound
