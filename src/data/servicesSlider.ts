import man_holding_key from "@/assets/regular_images/man_with_key.jpg";
import land_aerial from "@/assets/regular_images/aerial_view_land.jpg";
import man_signing_doc from "@/assets/regular_images/man_signing_doc.jpg";
import land_field_view from "@/assets/regular_images/land_field_view.jpg";
import land_geo_fence from "@/assets/regular_images/land_geo_fence.jpg";

interface ServicesSliderType {
  id: number;
  img: string;
  title: string;
  description: string;
  link: string;
}

export const servicesSliderData: ServicesSliderType[] = [
  {
    id: 1,
    img: man_holding_key,
    title: "A key to your Home",
    description:
      "Unlock the Door to Your New Home with Agyare Real Estate – Your Key to Affordable and Legitimate Land Awaits! Explore our expertly curated selection of verified properties, offering you secure and budget-friendly options. we provide a seamless experience with trustworthy, documented lands and personalized support.",
    link: "home",
  },
  {
    id: 2,
    img: land_aerial,
    title: "Registered land for sale",
    description:
      "Get access to registered land perfectly situated in prime locations, our lands offer security, convenience, and the ideal foundation for your dream home or investment. Whether you're building a personal sanctuary or expanding your portfolio, Agyare Real Estates Limited is your trusted partner in real estate",
    link: "home",
  },
  {
    id: 3,
    img: man_signing_doc,
    title: "Land documentation made easy",
    description:
      "Simplify your land acquisition process with our expert guidance. At Agyare Real Estates Limited, we handle all the paperwork and legalities, ensuring a smooth and hassle-free experience. Secure your property with confidence, knowing that our dedicated team is here to make land documentation straightforward and stress-free. Your peace of mind is our priority.",
    link: "home",
  },
  {
    id: 4,
    img: land_field_view,
    title: "Affordable lands at Breku - Ahentia",
    description:
      "Own a piece of prime real estate at an unbeatable price. Discover our affordable lands in Breku - Ahentia, offering the perfect blend of tranquility and convenience. Whether you're planning to build your dream home or make a sound investment, this opportunity is too good to miss. Secure your plot today with Agyare Real Estates Limited.",
    link: "home",
  },
  {
    id: 5,
    img: land_geo_fence,
    title: "Let’s manage your land for you",
    description:
      "Entrust your property to Agyare Real Estates Limited, and experience worry-free land management. From maintenance to maximizing value, our professional team handles everything, so you can enjoy the benefits without the hassle. Whether you're near or far, rest assured your land is in capable hands. Let us take care of the details, so you can focus on what matters most.",
    link: "home",
  },
];
