import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icons } from "@/assets/Assets";
import main_img from "@/assets/regular_images/about_img.jpg";
import { properties, PropertyDetails } from "@/data/propertiesData";

const PropertiesList = () => {
  const [selectedProperty, setSelectedProperty] =
    useState<PropertyDetails | null>(null);
  const { id } = useParams(); // Fetch id from URL
  const navigate = useNavigate();
  const selectedPropertyRef = useRef<HTMLDivElement>(null); // Ref for scrolling

  // Fetch property based on URL id when component loads
  useEffect(() => {
    if (id) {
      const property = properties.find((item) => item.id === id);
      if (property) {
        setSelectedProperty(property);
      }
    } else {
      // Default to the first property if no id is provided
      setSelectedProperty(properties[0]);
    }
  }, [id]);

  // Scroll to the selected property when a new property is selected
  useEffect(() => {
    if (selectedPropertyRef.current) {
      window.scrollTo({
        top: selectedPropertyRef.current.offsetTop - 50, // Adjust offset as needed
        behavior: "smooth",
      });
    }
  }, [selectedProperty]);

  const handleLearnMore = (propertyId: string) => {
    navigate(`/properties/${propertyId}`); // Update URL with property id
  };

  return (
    <section className="absolute sm:p-8 p-3 -top-48 sm:left-[10%] left-[5%] w-[90%] sm:w-[80%] bg-white rounded-2xl">
      {selectedProperty && (
        <div
          className="bg-white w-full mb-10 rounded-lg"
          ref={selectedPropertyRef} // Ref for the selected property
        >
          <div
            className="w-full overflow-hidden mb-4 h-[20rem] md:h-[28rem] lg:h-[35rem] bg-center bg-cover bg-no-repeat rounded-xl"
            style={{
              backgroundImage: `url(${selectedProperty.img || main_img})`,
            }}
          ></div>
          <h3 className="font-bold mb-4 text-[1.8rem]">
            {selectedProperty.name}
          </h3>
          <p className="opacity-60">
            {selectedProperty.desc ||
              "Agyare Real Estate and Construction Ghana Limited, a subsidiary of Pacific Group of Companies..."}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-7">
        {properties
          .filter((item) => item.id !== selectedProperty?.id) // Filter out the selected property
          .map((item) => (
            <div
              className="border border-[#E0E3EB] rounded-lg overflow-hidden p-3 lg:w-[48%] w-full"
              key={item.id}
            >
              <div
                className="w-full rounded-lg overflow-hidden mb-3 h-[15.5rem] md:h-[21rem] bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="flex justify-between gap-3 items-center">
                <div className="">
                  <p className="font-semibold text-[0.85rem]">{item.name}</p>
                  <p className="font-medium text-[0.8rem]">{item.location}</p>
                </div>
                <button
                  className="flex items-center justify-center border border-[#FF0000] text-[#FF0000] font-bold px-2 py-2 rounded-[0.25rem] text-[0.8rem]"
                  onClick={() => handleLearnMore(`${item.id}`)} // Navigate on click
                >
                  Learn more
                  <Icons.ButtonArrow className="ml-4" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PropertiesList;
