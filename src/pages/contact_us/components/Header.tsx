import bgImg from "../../../assets/regular_images/hero_img.jpg";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.84)), url(${bgImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat md:h-[27rem] h-[20rem] sm:px-[10%] px-4 xs:px-6 md:pt-28 pt-8 w-full flex flex-col justify-between relative"
    >
      <h1 className="text-white text-[2.5rem] sm:text-[4rem] font-bold leading-[4rem] w-[70%] mb-2">
        Contact us
      </h1>
    </header>
  );
};

export default Header;
