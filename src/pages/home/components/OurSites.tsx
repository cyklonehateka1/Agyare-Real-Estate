import { Icons } from "@/assets/Assets";
import houseImg from "@/assets/regular_images/white_house.jpg";
const OurSites = () => {
  return (
    <section className="absolute sm:p-8 p-3 sm:left-[10%] left-[5%] w-[90%] sm:w-[80%] bg-white  rounded-2xl">
      <div className="w-[20%] bg-[#FF0000] h-[0.15rem] mb-4"></div>
      <h3 className="font-bold sm:text-[3rem] text-[1.5rem] mb-10">
        Our Available sites
      </h3>
      <div className="flex flex-wrap gap-7">
        {[0, 1, 2, 3, 4, 5].map((item) => {
          return (
            <div
              className="border border-[#E0E3EB] rounded-lg overflow-hidden p-3 lg:w-[48%] w-full"
              key={item}
            >
              <div className="w-full rounded-lg overflow-hidden mb-3">
                <img src={houseImg} alt="white house" className="w-full" />
              </div>
              <div className="flex justify-between gap-3 items-center">
                <div className="">
                  <p className="font-semibold text-[0.85rem]">
                    4 Bedroom house
                  </p>
                  <p className="font-medium text-[0.8rem]">Located at Oyaria</p>
                </div>
                <button className="flex items-center justify-center border border-[#FF0000] text-[#FF0000] font-bold px-2  py-2 rounded-[0.25rem] text-[0.8rem]">
                  Learn more
                  <Icons.ButtonArrow className="ml-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurSites;
