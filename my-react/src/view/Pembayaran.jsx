import { useState, useEffect, useCallback } from "react";
import { ToLocalDate } from "../lib/toLocalDateFunction";

function Pembayaran() {
  const [Pembayaran, setPembayaran] = useState([]);

  const fetchPembayaran = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8000/pembayaran`);
      const data = await response.json();
      setPembayaran(data.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, []);

  useEffect(() => {
    fetchPembayaran();
  }, [fetchPembayaran]);

  return (
    <div className="overflow-x-auto justify-center mt-11 mx-6 text-white  my-4 bg-slate-900">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>penjualan_Id</th>
            <th>jumlah_pembayaran</th>
            <th>metode_pembayaran</th>
            <th>tanggal_pembayaran</th>
          </tr>
        </thead>
        <tbody>
          {/* 
            
               "id": 5,
            "penjualan_Id": 1,
            "jumlah_pembayaran": "500000",
            "metode_pembayaran": "Kredit",
            "tanggal_pembayaran": "2025-02-02T06:40:12.190Z"
            */}
          {Pembayaran.length > 0 ? (
            Pembayaran.map((el) => (
              <tr className="bg-base-300" key={el.id}>
                <td>{el?.id}</td>
                <td>{el?.penjualan_Id}</td>
                <td>{el?.jumlah_pembayaran}</td>
                <td>{el?.metode_pembayaran}</td>
                <td>{ToLocalDate(el?.tanggal_pembayaran)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Pembayaran;
