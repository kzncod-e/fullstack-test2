import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./view/Home";
import Penjualan from "./view/Penjualan";
import Nav from "./components/Nav";
import Pembayaran from "./view/Pembayaran";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/penjualan`} element={<Penjualan />} />
          <Route path={`/pembayaran`} element={<Pembayaran />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
