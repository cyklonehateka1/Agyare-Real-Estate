import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const MainLayout = () => {
  return (
    <div className="font-inter overflow-hidden text-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
