import Contact from "@/components/Contact";
import HeroSection from "./components/HeroSection";
import OurSites from "./components/OurSites";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div className="w-screen">
      <HeroSection />
      <div className="px-[10%] pt-[19rem] bg-white">
        <Services />
      </div>
      <OurSites />
      <Contact />
    </div>
  );
};

export default Home;
