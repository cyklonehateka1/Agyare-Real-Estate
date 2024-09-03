import { Icons } from "@/assets/Assets";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  id: number;
}

export const serviceData: Service[] = [
  {
    icon: <Icons.ServiceConstruction />,
    id: 1,
    title: "General construction",
    description:
      "We offer expert general construction services,delivering high-quality craftsmanship for residential, commercial, and industrial projects. Our dedicated team ensures precision, durability, and timely completion.",
  },
  {
    icon: <Icons.SaleOfLand />,
    id: 2,
    title: "Sales of land",
    description:
      "We specialize in the sale of registered lands throughout Ghana. We help you have access to secure, well-documented properties, making your land acquisition smooth and reliable. Trust us to help you find the perfect location for your next investment or development project.",
  },
  {
    icon: <Icons.RealEstate />,
    id: 3,
    title: "Real Estate development",
    description:
      " From conceptual design to construction and final finishing, our expert team manages every step to deliver exceptional residential, commercial, and mixed-use developments. Partner with us to bring innovative and sustainable real estate solutions to life.",
  },
];
