import { useState, useEffect, useCallback } from "react";

function Home() {
  const [komisi, setKomisi] = useState([]);

  const fetchKomisi = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8000/komisi`);
      const data = await response.json();
      setKomisi(data.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, []);

  useEffect(() => {
    fetchKomisi();
  }, [fetchKomisi]);

  useEffect(() => {}, [komisi]);

  return (
    <div className="overflow-x-auto justify-center mt-11 mx-6 text-white  my-4 bg-slate-900">
      <table className="table">
        <thead>
          <tr>
            <th>Marketing</th>
            <th>Bulan</th>
            <th>Omzet</th>
            <th>Komisi %</th>
            <th>Komisi Nominal</th>
          </tr>
        </thead>
        <tbody>
          {komisi.length > 0 ? (
            komisi.map((el, index) => (
              <tr className="bg-base-300" key={index}>
                <td>{el?.marketing}</td>
                <td>{el?.bulan}</td>
                <td>{el?.Omzet}</td>
                <td>{el?.komisiPersen}%</td>
                <td>{el?.komisiNominal}</td>
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

export default Home;
