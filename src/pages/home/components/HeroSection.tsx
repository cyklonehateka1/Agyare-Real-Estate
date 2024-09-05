import bgImg from "../../../assets/regular_images/about_img.jpg";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.84)), url(${bgImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat md:h-[40rem] sm:h-[30rem] h-[25rem] sm:px-[10%] px-4 xs:px-6 lg:pt-20 pt-8 w-full flex flex-col justify-between relative"
    >
      <div className="w-full">
        <h1 className="text-white text-[1.5rem] sm:text-[2.3rem] md:text-[3rem] sm:leading-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-bold md:leading-[3.3rem] lg:leading-[4rem] xl:leading-[4.3rem] leading-[2rem] sm:w-[90%] lg:w-[70%] w-[100%] mb-2">
          Discover Affordable & Legitimate Land with Agyare Real Estate
        </h1>
        <h4 className="text-[#ffffffc8] font-medium text-[1rem] sm:text-[1.3rem] md:text-[1.6rem] lg:text-[2rem]">
          Secure your ideal property now
        </h4>
      </div>
      <Slider />
    </section>
  );
};

export default HeroSection;
