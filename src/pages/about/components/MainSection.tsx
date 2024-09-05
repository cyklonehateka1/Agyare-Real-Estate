import { Icons } from "@/assets/Assets";
import main_img from "@/assets/regular_images/about_img.jpg";
import { missionData } from "@/data/missionData";

const MainSection = () => {
  return (
    <div className="bg-white  sm:px-[10%] px-4 xs:px-6 relative lg:h-[81rem] md:h-[116rem] h-[109rem] flex items-end">
      <div className=" bg-white sm:p-6 p-3 w-[90%] sm:w-[80%] sm:left-[10%] left-[5%] rounded-lg shadow-lg shadow-[#1118270D] absolute top-[-12rem]">
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

      <div className=" bg-white pb-10 flex flex-wrap items-center justify-between md:gap-5 gap-0">
        {missionData.map((item) => {
          return (
            <div
              className="border-[0.032rem] border-[#E4E4E4] lg:w-[48.5%] xl:w-[49%] mb-5 lg:mb-0 w-full h-[18rem] flex flex-col justify-center p-3 sm:p-8 md:p-12 lg:p-3 rounded-2xl gap-3 hover:shadow-lg hover:shadow-[#0000000c] cursor-default shrink-0"
              key={item.id}
            >
              <div className="mb-2">
                <div className="h-14 w-14 border-[#FF0000] border rounded-2xl flex justify-center items-center">
                  <div className="bg-[#FDDADAB2] h-10 w-10 rounded-lg flex justify-center items-center">
                    {item.icon}
                  </div>
                </div>
              </div>
              <h5 className="font-semibold text-[1rem]">{item.title}</h5>
              <p className="text-[#7A7474] text-[0.83rem]">
                {item.description}
              </p>
            </div>
          );
        })}
        <div className="border-[0.032rem] border-[#E4E4E4] lg:w-[48%] xl:w-[49%] mb-5 lg:mb-0 w-full h-[18rem] flex flex-col justify-center p-3 sm:p-8 md:p-12 lg:p-3 rounded-2xl gap-3 hover:shadow-lg hover:shadow-[#0000000c] cursor-default shrink-0">
          <div className="mb-2">
            <div className="h-14 w-14 border-[#FF0000] border rounded-2xl flex justify-center items-center">
              <div className="bg-[#FDDADAB2] h-10 w-10 rounded-lg flex justify-center items-center">
                <Icons.CheckMarkCircle />
              </div>
            </div>
          </div>
          <h5 className="font-semibold text-[1rem]">Our commitment</h5>
          <ul className="list-disc pl-4">
            <li>
              <p className="text-[#7A7474] text-[0.83rem]">
                <span className="font-medium text-[#14171F]">
                  Partnership & Satisfaction:
                </span>{" "}
                We are fully committed to working in partnership with our
                clients, prioritizing their interests in real estate
                development.
              </p>
            </li>
            <li>
              <p className="text-[#7A7474] text-[0.83rem]">
                <span className="font-medium text-[#14171F]">
                  Service Excellence:
                </span>{" "}
                We are dedicated to delivering on our promises, ensuring that
                our services meet the highest standards.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
