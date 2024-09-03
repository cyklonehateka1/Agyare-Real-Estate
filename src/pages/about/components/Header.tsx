import bgImg from "../../../assets/regular_images/hero_img.jpg";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.84)), url(${bgImg})`,
      }}
      className="bg-cover bg-center bg-no-repeat h-[27rem] px-[10%] pt-28 w-full flex flex-col justify-between relative"
    >
      <h1 className="text-white text-[4rem] font-extrabold leading-[4rem] w-[70%] mb-2">
        About us
      </h1>
    </header>
  );
};

export default Header;
