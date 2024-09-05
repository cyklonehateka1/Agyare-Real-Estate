import { Link } from "react-router-dom";
import logo from "../assets/logos/adjare_estate_logo.svg";
import { Icons } from "@/assets/Assets";

const Footer = () => {
  return (
    <div className="w-full px-5 sm:px-10 md:px-[10%] py-10 bg-white">
      <div className="sm:flex grid grid-cols-1 sm:grid-cols-2 gap-8 items-start justify-between mb-20">
        {/* Logo */}
        <img src={logo} alt="Agyare Real Estate" className="mx-auto sm:mx-0" />

        {/* Company Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h5 className="text-[1rem] font-bold text-center sm:text-left text-[#0A142F] mb-4">
            Agyare Real Estate
          </h5>
          <div className="flex flex-col items-center sm:items-start text-[#0a142fd6] gap-2 text-[0.8rem]">
            <Link to="/about" className="text-center sm:text-left">
              About us
            </Link>
            <Link to="/properties/1" className="text-center sm:text-left">
              Properties
            </Link>
            <Link to="/" className="text-center sm:text-left">
              Clients
            </Link>
            <Link to="/contact" className="text-center sm:text-left">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h5 className="text-[1rem] font-bold text-center sm:text-left text-[#0A142F] mb-4">
            Contact Us
          </h5>
          <div className="flex flex-col items-center sm:items-start text-[#0a142fd6] gap-2 text-[0.8rem]">
            <a href="tel:+233201685670" className="text-center sm:text-left">
              +233 (0)201685670
            </a>
            <a href="tel:+233546969687" className="text-center sm:text-left">
              +233 (0)546969687
            </a>
            <a
              href="mailto:info@agyarerealestates.com"
              className="text-center sm:text-left"
            >
              Email: info@agyarerealestates.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h5 className="text-[1rem] font-bold text-center sm:text-left text-[#0A142F] mb-4">
            Social
          </h5>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com">
              <Icons.Fb className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com">
              <Icons.Ig className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com">
              <Icons.Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-10 border-t border-[#979797] text-[#0a142f9e] text-[0.8rem]">
        <p>© 2024 Agyare Real Estates Limited | All Rights Reserved</p>
        <p>Designed by iCreations</p>
      </div>
    </div>
  );
};

export default Footer;
