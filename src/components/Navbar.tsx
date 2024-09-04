import { Link } from "react-router-dom";
import logo from "../assets/logos/adjare_estate_logo.svg";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center  sm:px-[12%] px-4 xs:px-10 py-3 bg-white fixed z-120">
      <Link to="/">
        <img src={logo} alt="Agyare Real Estate logo" className="w-20" />
      </Link>
      <ul
        className="flex flex-col md:flex-row right-[-10rem] md:right-0 top-0 md:items-center items-start pr-10 
      md:gap-6 lg:gap-16 gap-5 list-none absolute md:relative bg-white py-7 px-4 md:py-0 md:px-0 rounded-l-lg md:shadow-none shadow-md shadow-[#0000001c]"
      >
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
