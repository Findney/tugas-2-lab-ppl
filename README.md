# 📚 Sistem Arsip Buku (Node.js + JSON Database)

Sistem ini adalah aplikasi berbasis **Node.js** yang digunakan untuk mengelola arsip buku dengan database dalam format **JSON**. Aplikasi ini berjalan di **terminal/command line** dan memiliki fitur untuk menambah, menghapus, mencari, memperbarui, serta mengekspor data buku ke dalam format **CSV**.

---

## 🚀 Fitur Utama
✅ Menampilkan daftar semua buku dalam format **tabel**  
✅ Mencari buku berdasarkan **judul**  
✅ Menambahkan **buku baru** ke dalam arsip  
✅ Menghapus buku berdasarkan **nomor** dalam daftar  
✅ Mengedit dan **memperbarui atribut tertentu** dalam buku  
✅ Mengekspor data buku ke dalam **format CSV**  
✅ **Interaktif melalui terminal**  

---

## 🛠️ Instalasi & Menjalankan Program
### 1. Clone Repository
```bash
git clone https://github.com/Findney/book-archive.git
cd repo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Program
```bash
npm run dev
```

---

## 📖 Cara Penggunaan
Setelah menjalankan aplikasi, pengguna akan disajikan menu interaktif di terminal seperti berikut:
```bash
📚 Sistem Arsip Buku
1. Lihat semua buku
2. Cari buku berdasarkan nama
3. Tambah buku baru
4. Hapus buku
5. Update buku
6. Export ke CSV
7. Keluar
```
Pengguna dapat memasukkan nomor menu untuk melakukan operasi yang diinginkan.

---

## 📂 Struktur Folder
```
/project-root
│── database
    ├── db_arsip_buku.json  # Database utama (JSON)
│── index.js                # Entry point aplikasi
│── modules/
│   ├── add.js              # Menambahkan buku baru
│   ├── delete.js           # Menghapus buku
│   ├── update.js           # Memperbarui buku
│   ├── display.js          # Menampilkan dan mencari buku
│   ├── export.js           # Mengekspor ke CSV
│   ├── readDB.js           # Membaca dan menulis database JSON
│── package.json            # Konfigurasi Node.js
│── README.md               # Dokumentasi proyek
```

---

## 📝 Contoh Data (dataset.json)
```json
[
  {
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "year": 2011,
    "publisher": "Harper",
    "genre": "Sejarah",
    "pages": 464,
    "isbn": "9780062316097",
    "status": "Tersedia"
  }
]
```

---

## 🔧 Teknologi yang Digunakan
- **Node.js** – Runtime JavaScript  
- **readline** – Input interaktif di terminal  
- **fs (File System)** – Manipulasi file JSON dan CSV  
- **console.table** – Menampilkan data dalam format tabel  
