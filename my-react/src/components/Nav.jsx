import { Link } from "react-router";

const Nav = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/penjualan"}>
              {" "}
              <span>penjualan</span>
            </Link>
          </li>
          <li>
            <Link to={"/pembayaran"}>
              {" "}
              <span>Pembayaran</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
