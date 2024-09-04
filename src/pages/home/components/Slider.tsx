import React, { useState, useEffect } from "react";
import { servicesSliderData } from "@/data/servicesSlider";
import { Icons } from "../../../assets/Assets";

interface SliderItem {
  id: number;
  img: string;
  title: string;
  description: string;
}

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = servicesSliderData.length;

  // Autoplay: Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalSlides]);

  // Function to set slide by index (for navigation dots)
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="sm:p-5 p-3 bg-white absolute w-[90%] sm:w-[80%] rounded-lg h-[40rem] lg:h-[29.6rem] sm:left-[10%] left-[5%] lg:bottom-[-15rem] md:bottom-[-22rem] bottom-[-26rem] overflow-hidden shadow-lg shadow-[#1118270D] flex flex-col gap-4 ">
      <div
        className={`flex w-[100%] h-[35rem] lg:h-[24.2rem] transition-transform duration-500 gap-[5%] ease-in-out`}
        style={{ transform: `translateX(-${activeIndex * 105}%)` }}
      >
        {servicesSliderData.map((item: SliderItem) => (
          <div
            className="flex flex-col md:flex-row w-full gap-5 items-center shrink-0 h-full"
            key={item.id}
          >
            <div
              className="rounded-2xl md:w-1/2 w-full overflow-hidden h-full flex justify-center items-center bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="md:w-1/2 w-full">
              <div className="w-[40%] bg-[#FF0000] h-[0.15rem] mb-10"></div>
              <h2 className="font-bold md:text-[3rem] text-[1.2rem] sm:leading-[3rem] leading-[1.3rem] mb-3">
                {item.title}
              </h2>
              <p className="text-[#000000a4] mb-6 sm:text-[0.85rem] text-[0.8rem]">
                {item.description}
              </p>
              <button className="flex items-center justify-center border border-[#FF0000] text-[#FF0000] font-bold w-full md:w-auto px-9 md:py-3 py-4 rounded-lg">
                Learn more
                <Icons.ButtonArrow className="ml-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-4 mt-4">
        {servicesSliderData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-[#000000]" : "bg-[#D9D9D9]"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
