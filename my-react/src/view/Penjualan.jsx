import { useState, useEffect, useCallback } from "react";
import { ToLocalDate } from "../lib/toLocalDateFunction";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";

function Penjualan() {
  const [penjualan, setPenjualan] = useState([]);
  const navigate = useNavigate();
  const [metodePembayaran] = useState("kredit");

  const handleButtonClick = (id, grandTotal) => {
    handlePembayaran(id, grandTotal);
  };

  const handlePembayaran = async (id, grandTotal) => {
    try {
      const response = await fetch(`http://localhost:8000/pembayaran`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          penjualan_Id: id,
          jumlah_pembayaran: grandTotal,
          metode_pembayaran: metodePembayaran,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast(`🦄 ${data.message}`, { position: "top-right" });
        setTimeout(() => {
          navigate("/pembayaran");
        }, 2000);
      } else {
        toast(`🦄 ${data.message}`, { position: "top-right" });
      }
    } catch (error) {
      console.error("Failed to submit payment:", error);
    }
  };

  const fetchPenjualan = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8000/penjualan`);
      const data = await response.json();
      setPenjualan(data.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, []);

  useEffect(() => {
    fetchPenjualan();
  }, [fetchPenjualan]);

  return (
    <div className="overflow-x-auto justify-center mx-9 my-4 bg-slate-800">
      <table className="table">
        <thead>
          <tr>
            <th>transaction_number</th>
            <th>marketing_Id</th>
            <th>date</th>
            <th>cargo_fee</th>
            <th>total_balance</th>
            <th>grand_total</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {penjualan.length > 0 ? (
            penjualan.map((el) => (
              <tr className="bg-base-200" key={el.id}>
                <td>{el?.transaction_number}</td>
                <td>{el?.marketing_Id}</td>
                <td>{ToLocalDate(el?.date)}</td>
                <td>{el?.cargo_fee}</td>
                <td>{el?.total_balance}</td>
                <td>{el?.grand_total}</td>
                <td>
                  <button
                    className="btn btn-neutral"
                    onClick={() => handleButtonClick(el.id, el.grand_total)}>
                    Bayar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default Penjualan;
