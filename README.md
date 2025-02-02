# 📌 Sistem Pembayaran dengan Prisma dan Express

## 📖 Deskripsi
Proyek ini adalah sistem pembayaran berbasis Node.js menggunakan Express dan Prisma sebagai ORM untuk berinteraksi dengan database. Sistem ini memungkinkan pengguna untuk membuat dan mengambil data transaksi pembayaran.

## ⚡ Fitur
- **Membuat Pembayaran**: Menyimpan data transaksi pembayaran berdasarkan ID penjualan.
- **Mendapatkan Semua Pembayaran**: Mengambil semua transaksi pembayaran yang telah dilakukan.
- **Validasi ID Penjualan**: Memastikan bahwa ID penjualan yang diberikan valid sebelum membuat pembayaran.
- **Cegah Duplikasi**: Tidak mengizinkan pembayaran ganda untuk transaksi yang sudah selesai.

## 🛠️ Instalasi
1. **Kloning repositori**
   ```sh
   git clone https://github.com/username/repository.git
   cd repository
   ```
2. **Install dependencies**
   ```sh
   bun install
   ```
3. **Konfigurasi Database**
   - Ubah file `.env` dengan konfigurasi database yang sesuai:
     ```env
     DATABASE_URL="mysql://user:password@localhost:3306/nama_database"
     ```
   - Jalankan migrasi database:
     ```sh
     bun run prisma migrate dev
     ```
4. **Jalankan Server**
   ```sh
   bun run dev
   ```

## 🚀 API Endpoints
### 1. **Membuat Pembayaran**
   - **Endpoint**: `POST /pembayaran`
   - **Request Body**:
     ```json
     {
       "penjualan_Id": "123",
       "jumlah_pembayaran": "500000",
       "metode_pembayaran": "Transfer Bank"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Pembayaran berhasil",
       "data": {
         "id": "1",
         "penjualan_Id": "123",
         "jumlah_pembayaran": "500000",
         "metode_pembayaran": "Transfer Bank"
       }
     }
     ```

### 2. **Mendapatkan Semua Pembayaran**
   - **Endpoint**: `GET /pembayaran`
   - **Response**:
     ```json
     {
       "message": "Berhasil mengambil seluruh transaksi pembayaran",
       "data": [
         {
           "id": "1",
           "penjualan_Id": "123",
           "jumlah_pembayaran": "500000",
           "metode_pembayaran": "Transfer Bank"
         }
       ]
     }
     ```

## 🛑 Validasi & Error Handling
- **404 - Transaksi tidak ditemukan** jika `penjualan_Id` tidak ada.
- **500 - Transaksi sudah selesai** jika pembayaran telah dilakukan sebelumnya.
- **500 - Kesalahan server** jika terjadi error pada sistem.

## 📜 Lisensi
Proyek ini menggunakan lisensi MIT. Silakan gunakan dan kontribusi sesuai kebutuhan.

---

**Dibuat dengan ❤️ oleh [Nama Anda]**

