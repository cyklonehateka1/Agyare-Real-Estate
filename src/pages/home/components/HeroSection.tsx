import bgImg from "../../../assets/regular_images/hero_img.jpg";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.84)), url(${bgImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat h-[40rem] px-[10%] pt-20 w-full flex flex-col justify-between relative"
    >
      <div className="">
        <h1 className="text-white text-[4rem] font-extrabold leading-[4rem] w-[70%] mb-2">
          Discover Affordable & Legitimate Land with Agyare Real Estate
        </h1>
        <h4 className="text-[#ffffffc8] font-medium text-[2rem]">
          Secure your ideal property now
        </h4>
      </div>
      <Slider />
    </section>
  );
};

export default HeroSection;
