import { Link } from "react-router-dom";
import logo from "../assets/logos/adjare_estate_logo.svg";
import { Icons } from "@/assets/Assets";

const Footer = () => {
  return (
    <div className="w-full px-[10%] py-10">
      <div className="flex items-start justify-between mb-20">
        <img src={logo} alt="" />
        <div className="flex flex-col">
          <h5 className="text-[1rem] font-bold text-center text-[#0A142F] mb-4">
            Agyare Real Estate
          </h5>
          <div className="flex flex-col items-start text-[#0a142fd6] gap-2 text-[0.8rem]">
            <Link to="/" className="text-center">
              About us
            </Link>
            <Link to="/" className="text-center">
              Sites
            </Link>
            <Link to="/" className="text-center">
              Clients
            </Link>
            <Link to="/" className="text-center">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[1rem] font-bold text-center text-[#0A142F] mb-4">
            Contact Us
          </h5>
          <div className="flex flex-col items-start text-[#0a142fd6] gap-2 text-[0.8rem]">
            <a href="tel:+233201685670" className="text-center">
              +233 (0)201685670
            </a>
            <a href="tel:+233546969687" className="text-center">
              +233 (0)546969687
            </a>
            <a href="mailto:info@agyarerealestates.com" className="text-center">
              Email: info@agyarerealestates.com
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h5 className="text-[1rem] font-bold text-center text-[#0A142F] mb-4">
            Social
          </h5>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com">
              <Icons.Fb />
            </a>
            <a href="https://www.instagram.com">
              <Icons.Ig />
            </a>
            <a href="https://www.youtube.com">
              <Icons.Youtube />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-10 border-t border-[#979797] text-[#0a142f9e] text-[0.8rem]">
        <p> © 2024 Agyare Real Estates Limited | All Rights Reserved</p>
        <p>Designed by iCreations</p>
      </div>
    </div>
  );
};

export default Footer;
