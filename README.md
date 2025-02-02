# 📄 **API Documentation**

## ⚙️ **Instalasi & Menjalankan Proyek**

1. **Masuk ke folder `my-react`:**
   ```sh
   cd my-react
   ```
2. **Install dependencies:**
   ```sh
   npm i
   ```
3. **Jalankan proyek frontend:**
   ```sh
   bun run dev
   ```
4. **Masuk ke folder `server`:**
   ```sh
   cd ../server
   ```
5. **Konfigurasi database di file `.env`** (lihat contoh di bawah).
6. **Install dependencies:**
   ```sh
   npm i
   ```
7. **Jalankan migrasi database:**
   ```sh
   npx prisma migrate dev
   ```
8. **Seed database:**
   ```sh
   npx prisma db seed
   ```
9. **Jalankan server:**
   ```sh
   npm run dev
   ```

---

## 📌 **Contoh Konfigurasi `.env`**

Buat file `.env` di dalam folder `server` dan tambahkan konfigurasi berikut:

```ini
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/nama_database"

# Server Configuration
PORT=8000

```

---

## 🌐 **API Endpoints**

### 1. **POST /pembayaran**

🔹 **Membuat transaksi pembayaran.**

**Request Body:**

```json
{
  "penjualan_Id": 1,
  "jumlah_pembayaran": 3000000,
  "metode_pembayaran": "kredit"
}
```

**Response:**

```json
{
  "message": "Pembayaran berhasil",
  "data": {
    "id": 1,
    "penjualan_Id": 1,
    "jumlah_pembayaran": "3000000",
    "metode_pembayaran": "kredit"
  }
}
```

---

### 2. **GET /pembayaran**

🔹 **Mengambil semua transaksi pembayaran.**

**Response:**

```json
{
  "message": "Berhasil mengambil seluruh transaksi pembayaran",
  "data": [
    {
      "id": 1,
      "penjualan_Id": 1,
      "jumlah_pembayaran": "3000000",
      "metode_pembayaran": "kredit"
    }
  ]
}
```

---

### 3. **GET /komisi**

🔹 **Mengambil data komisi marketing.**

**Response:**

```json
{
  "message": "Data komisi berhasil diambil",
  "data": [
    {
      "marketing": "Alfandy",
      "bulan": "May",
      "Omzet": 138035000,
      "komisiPersen": 2.5,
      "komisiNominal": 3450875
    }
  ]
}
```

---

### 4. **GET /penjualan**

🔹 **Mengambil data transaksi penjualan.**

**Response:**

```json
{
  "message": "Success fetch penjualan data",
  "data": [
    {
      "id": 1,
      "transaction_number": "TRX001",
      "marketing_Id": 1,
      "date": "2023-05-22T00:00:00.000Z",
      "cargo_fee": 25000,
      "total_balance": 3000000,
      "grand_total": 3025000
    }
  ]
}
```

---

### 💡 **Catatan:**

Pastikan `.env` sudah dikonfigurasi dengan benar sebelum menjalankan proyek.
