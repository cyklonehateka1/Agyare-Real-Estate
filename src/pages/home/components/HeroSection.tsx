import bgImg from "../../../assets/regular_images/hero_img.jpg";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.84)), url(${bgImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat sm:h-[40rem] h-[25rem] sm:px-[10%] px-4 xs:px-10 pt-20 w-full flex flex-col justify-between relative"
    >
      <div className="">
        <h1 className="text-white text-[1.5rem] sm:text-[4rem] font-extrabold md:leading-[4rem] leading-[2rem] sm:w-[70%] w-[100%] mb-2">
          Discover Affordable & Legitimate Land with Agyare Real Estate
        </h1>
        <h4 className="text-[#ffffffc8] font-medium text-[1rem] sm:text-[2rem]">
          Secure your ideal property now
        </h4>
      </div>
      <Slider />
    </section>
  );
};

export default HeroSection;
