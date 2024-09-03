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
    <div className="p-5 bg-white absolute w-[80%] rounded-lg h-[28.2rem] left-[10%] bottom-[-15rem] overflow-hidden shadow-lg shadow-[#1118270D]">
      <div
        className="flex w-[100%] h-[24.2rem] transition-transform duration-500 gap-[2%] ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 102}%)`,
        }}
      >
        {servicesSliderData.map((item: SliderItem) => (
          <div
            className="flex w-full gap-5 items-center shrink-0"
            key={item.id}
          >
            <div className="rounded-2xl w-1/2 overflow-hidden flex justify-center items-center">
              <img src={item.img} alt={item.title} className="w-full" />
            </div>
            <div className="w-1/2">
              <div className="w-[40%] bg-[#FF0000] h-[0.15rem] mb-10"></div>
              <h2 className="font-bold text-[3rem] leading-[3rem] mb-3">
                {item.title}
              </h2>
              <p className="text-[#000000a4] mb-6">{item.description}</p>
              <button className="flex items-center border border-[#FF0000] text-[#FF0000] font-bold px-9 py-3 rounded-lg">
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
