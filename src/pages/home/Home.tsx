import Contact from "@/components/Contact";
import HeroSection from "./components/HeroSection";
import OurSites from "./components/OurSites";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div className="w-screen">
      <HeroSection />
      <div className="sm:px-[10%] px-4 xs:px-10 md:pt-[19rem] pt-[33rem] bg-white">
        <Services />
      </div>
      <OurSites />
      <Contact paddingTopLg="15rem" paddingTopSm="15rem" />
    </div>
  );
};

export default Home;
