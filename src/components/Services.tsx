import { serviceData } from "@/data/servicesData";

const Services = () => {
  return (
    <section className=" bg-white pb-10 flex flex-col lg:flex-row items-center justify-between gap-[1%] ">
      {serviceData.map((item) => {
        return (
          <div
            className="border-[0.032rem] border-[#E4E4E4] lg:w-[32%] mb-5 lg:mb-0 w-full h-[18rem] flex flex-col justify-center p-3 sm:p-8 md:p-12 lg:p-3 rounded-2xl gap-3 hover:shadow-lg hover:shadow-[#0000000c] cursor-default"
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
            <p className="text-[#7A7474] text-[0.88rem]">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
