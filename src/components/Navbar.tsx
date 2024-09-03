import { Link } from "react-router-dom";
import logo from "../assets/logos/adjare_estate_logo.svg";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-40 py-3 bg-white">
      <Link to="/">
        <img src={logo} alt="Agyare Real Estate logo" className="w-20" />
      </Link>
      <ul className="flex items-center pr-10 gap-16 list-none">
        <li className="font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="font-bold">
          <Link to="/">Services</Link>
        </li>
        <li className="font-bold">
          <Link to="/">Lands</Link>
        </li>
        <li className="font-bold">
          <Link to="/about">About us</Link>
        </li>
        <li className="font-bold">
          <Link to="/">Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
