### 1. Tahap Pertama: Membuka Gerbang (Laravel Web) 
Saat user mengetik localhost/ di browser:
Browser mengirim permintaan ke web.php.
web.php memberikan file index.blade.php.
Di dalam browser, file tersebut memuat JavaScript (React) melalui Vite.
Sekarang, React "hidup" di browser user.
### 2. Tahap Kedua: Navigasi (React Router)
Saat user klik menu "News" atau akses localhost/news:
React Router (di resources/js/router/index.jsx) langsung menangkap alamat tersebut.
React tidak memanggil Laravel web.php lagi (halaman tidak reload).
React hanya mengganti tampilan di layar dengan komponen NewsList.jsx.
### 3. Tahap Ketiga: Mengisi Data (Laravel API)
Saat komponen NewsList.jsx muncul, dia masih kosong (belum ada datanya). Di sinilah api.php bekerja:
React (lewat news.service.js) mengirim permintaan "di balik layar" (AJAX/Fetch) ke localhost/api/news.
api.php menerima permintaan itu, memanggil NewsController, dan mengambil data dari database.
Laravel mengirim data dalam bentuk JSON (hanya teks data, tanpa desain).
React menerima teks data tersebut, lalu merendernya (memasukkannya) ke dalam komponen HTML sehingga tampil sebagai daftar berita.

## Analogi Sederhana:
- web.php + Blade: Ibarat Anda membangun Gedung Restoran dan memberikan Daftar Menu (Struktur/Layout).
- api.php: Ibarat Dapur. Saat pelanggan pesan (klik menu), dapur mengirimkan Bahan Makanan (Data JSON).
- React: Ibarat Pelayan. Dia yang mengatur meja, membawakan menu, dan menyajikan bahan makanan dari dapur ke atas piring agar siap dimakan pelanggan.

## Keuntungan Cara Ini:
Sangat Cepat: Halaman tidak pernah refresh total saat pindah menu.
Modern: Website terasa seperti aplikasi mobile (mulus).
Terpisah: Jika suatu saat Anda ingin membuat aplikasi Android/iOS, Anda tinggal memakai api.php yang sudah ada tanpa mengubah kodenya lagi.
