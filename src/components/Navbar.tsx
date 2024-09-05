import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/adjare_estate_logo.svg";
import { Icons } from "@/assets/Assets";

const Navbar = () => {
  // State to manage the menu's open and closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center sm:px-[12%] px-4 xs:px-10 py-3 bg-white fixed z-120">
      <NavLink to="/">
        <img src={logo} alt="Agyare Real Estate logo" className="w-20" />
      </NavLink>

      <ul
        className={`flex flex-col sm:px-[12%] px-4 xs:px-10 md:px-0 md:flex-row md:gap-6 lg:gap-16 gap-8 md:items-center list-none md:w-auto w-full md:min-h-max min-h-screen md:h-auto absolute md:relative bg-white md:bg-transparent ${
          isMenuOpen ? "top-[4.2rem]" : "top-[-100vh]"
        }  md:top-0 right-0 py-7 md:py-0 px-4 md:px-0 text-[1.3rem] md:text-[15px] transition-all duration-300 ease-in-out  md:flex`}
      >
        <li className="font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Home
          </NavLink>
        </li>
        {/* <li className="font-bold">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
        </li> */}
        <li className="font-bold">
          <NavLink
            to="/properties/1"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Properties
          </NavLink>
        </li>
        <li className="font-bold">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </NavLink>
        </li>
        <li className="font-bold">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#FF0000]" : "hover:text-[#FF0000]"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </NavLink>
        </li>
      </ul>

      {/* Menu Icon */}
      {!isMenuOpen && (
        <Icons.Menu
          className={`md:hidden flex ${isMenuOpen ? "hidden" : "flex"}`}
          onClick={() => setIsMenuOpen(true)}
        />
      )}
      {/* Close Icon */}
      <Icons.Close
        className={`md:hidden flex ${isMenuOpen ? "flex" : "hidden"}`}
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export default Navbar;
