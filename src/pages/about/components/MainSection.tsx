import Services from "@/components/Services";
import main_img from "@/assets/regular_images/about_img.jpg";

const MainSection = () => {
  return (
    <div className="bg-white px-[10%] relative h-[67rem] flex items-end">
      <div className="w-[80%] bg-white py-6 px-6 rounded-lg shadow-lg shadow-[#1118270D] absolute top-[-12rem]">
        <div className="w-full overflow-hidden mb-6">
          <img
            src={main_img}
            alt="Employees of Agyare Real Estate"
            className="w-full"
          />
        </div>
        <p className="opacity-60">
          Agyare Real Estate and Construction Ghana Limited, a subsidiary of
          Pacific Group of Companies, has been shaping the real estate landscape
          in Ghana since 2011. Officially incorporated in 2017, we have
          established ourselves as a leader in land acquisition, estate housing,
          land registration, and general construction. Our mission is to help
          individuals and institutions acquire legally documented land, while
          our vision is to set the highest standards in the real estate
          industry. With a dedicated team and a commitment to excellence, we are
          here to guide you every step of the way.
        </p>
      </div>

      <div className="">
        <Services />
      </div>
    </div>
  );
};

export default MainSection;
