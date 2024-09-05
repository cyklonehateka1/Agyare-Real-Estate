import Contact from "@/components/Contact";
import Header from "./components/Header";
import PropertiesList from "./components/PropertiesList";

const Properties = () => {
  return (
    <div className="w-screen bg-white">
      <Header />
      <div className="sm:px-[10%] px-4 xs:px-6 bg-white relative lg:h-[113rem] md:h-[193rem] h-[162rem] xs:h-[158rem]">
        <PropertiesList />
      </div>
      <Contact />
    </div>
  );
};

export default Properties;
