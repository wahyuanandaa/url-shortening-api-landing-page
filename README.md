# URL Shortener - React Vite

Aplikasi URL Shortener yang dibangun dengan React dan Vite. Aplikasi ini memungkinkan pengguna untuk memendekkan URL panjang menjadi link yang lebih pendek dan mudah dibagikan.

## Fitur

- ✂️ Memendekkan URL menggunakan API shrtco.de
- 💾 Menyimpan link yang sudah dipendekkan di localStorage
- 📱 Responsive design dengan Tailwind CSS
- ⚡ Fast development dengan Vite
- 🎨 Modern UI/UX

## Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk UI
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Framework CSS utility-first
- **shrtco.de API** - API untuk memendekkan URL

## Instalasi

1. Clone repository ini:

```bash
git clone <repository-url>
cd url-shortner-main
```

2. Install dependencies:

```bash
npm install
# atau
pnpm install
```

3. Jalankan development server:

```bash
npm run dev
# atau
pnpm dev
```

4. Buka browser dan kunjungi `http://localhost:3000`

## Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run preview` - Preview build production
- `npm run lint` - Menjalankan ESLint

## Struktur Project

```
src/
├── components/
│   ├── sections/          # Komponen section utama
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── CallToAction.js
│   │   └── Footer.js
│   ├── UrlShortener.js    # Komponen utama URL shortener
│   └── ShortenedLink.js   # Komponen untuk menampilkan link
├── assets/
│   └── images/           # Gambar dan icon
├── App.js               # Komponen utama aplikasi
├── main.jsx            # Entry point (Vite)
└── index.css           # Styles global
```

## API

Aplikasi menggunakan [shrtco.de API](https://shrtco.de/) untuk memendekkan URL. API ini gratis dan tidak memerlukan API key.

## Deployment

Untuk deploy ke production:

```bash
npm run build
```

Build files akan tersedia di folder `dist/` yang bisa di-deploy ke platform hosting seperti Vercel, Netlify, atau GitHub Pages.

## Lisensi

MIT License
