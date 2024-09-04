import Contact from "@/components/Contact";
import HeroSection from "./components/HeroSection";
import OurSites from "./components/OurSites";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div className="w-screen">
      <HeroSection />
      <div className="sm:px-[10%] px-4 xs:px-6 lg:pt-[19rem] md:pt-[28rem] pt-[30rem] bg-white">
        <Services />
      </div>
      <div className="sm:px-[10%] px-4 xs:px-6 bg-white relative lg:h-[78rem] md:h-[220rem] h-[117rem] xs:h-[125rem]">
        <OurSites />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
