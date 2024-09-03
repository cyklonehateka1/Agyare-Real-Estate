import { Icons } from "@/assets/Assets";
import houseImg from "@/assets/regular_images/white_house.jpg";
const OurSites = () => {
  return (
    <section className="w-full sm:px-[10%] px-4 xs:px-10 pt-3 bg-white">
      <div className="w-[20%] bg-[#FF0000] h-[0.15rem] mb-4"></div>
      <h3 className="font-bold sm:text-[3rem] text-[1.5rem] mb-10">
        Our Available sites
      </h3>
      <div className="flex flex-wrap gap-7">
        {[0, 1, 2, 3, 4, 5].map((item) => {
          return (
            <div
              className="border border-[#E0E3EB] rounded-lg overflow-hidden p-3 md:w-[48%] w-full"
              key={item}
            >
              <div className="w-full rounded-lg overflow-hidden mb-3">
                <img src={houseImg} alt="white house" className="w-full" />
              </div>
              <p className="font-semibold text-[0.85rem]">4 Bedroom house </p>
              <p className="font-medium text-[0.8rem]"> Located at Oyaria</p>
              <div className="flex">
                <div className="">
                  <Icons.Bed />
                  <p>4 Bedrooms</p>
                </div>
                <div className="">
                  <Icons.Bath />
                  <p>2 bathrooms</p>
                </div>
                <div className="">
                  <Icons.Garage />
                  <p>1 Carport</p>
                </div>
                <div className="">
                  <Icons.Stairs />
                  <p>2 floors</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurSites;
