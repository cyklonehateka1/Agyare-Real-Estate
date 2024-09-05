import land_aerial from "@/assets/regular_images/aerial_view_land.jpg";
import land_field_view from "@/assets/regular_images/land_field_view.jpg";
import land_geo_fence from "@/assets/regular_images/land_geo_fence.jpg";
import white_house_ from "@/assets/regular_images/white_house.jpg";

export interface PropertyDetails {
  id: string;
  name: string;
  location: string;
  type: string;
  desc: string;
  img: string;
}

export const properties: PropertyDetails[] = [
  {
    id: "1",
    name: "Aerial View Land",
    location: "Budapest, Hungary",
    type: "land",
    desc: "With a strong emphasis on customer satisfaction, we tailor our construction solutions to meet the specific needs of each client. Whether you are building a new home, expanding your business facilities, or developing large-scale industrial structures, our experienced professionals bring innovative design, meticulous planning, and expert execution to every project. We use the highest quality materials and adhere to industry best practices, ensuring that each project stands the test of time. Trust Agyare Real Estate and Construction Ghana Limited to bring your vision to life with unmatched quality and reliability.",
    img: land_aerial,
  },
  {
    id: "2",
    name: "Afienya Plot",
    location: "Afienya Barrier",
    type: "land",
    desc: "lorem ipsum d Prometheus Plot in the United States of America and quality materials and adhere to industry best practices, ensuring that each project stands the test of time. Trust Agyare Real Estate and Construction Ghana Limited to bring your vision to life with unmatched quality and reliability",
    img: land_field_view,
  },
  {
    id: "3",
    name: "Residential magic",
    location: "Kasoa Hills",
    type: "house",
    desc: " We use the highest quality materials and adhere to industry best practices, ensuring that each project stands the test of time. Trust Agyare Real Estate and Construction Ghana Limited to bring your vision to life with unmatched quality With a strong emphasis on customer satisfaction, we tailor our construction solutions to meet the specific needs of each client. Whether you are building a new home, expanding your business facilities, or developing large-scale industrial structures,",
    img: white_house_,
  },
  {
    id: "4",
    name: "Aerial View Land",
    location: "Budapest, Hungary",
    type: "land",
    desc: "With a strong emphasis on customer satisfaction, we tailor our construction solutions to meet the specific needs of each client. Whether you are building a new home, expanding your business facilities, or developing large-scale industrial structures, our experienced professionals bring innovative design, meticulous planning, and expert execution to every project. We use the highest quality materials and adhere to industry best practices, ensuring that each project stands the test of time. Trust Agyare Real Estate and Construction Ghana Limited to bring your vision to life with unmatched quality and reliability.",
    img: land_aerial,
  },
  {
    id: "5",
    name: "Afienya Plot",
    location: "Afienya Barrier",
    type: "land",
    desc: "lorem ipsum d Prometheus Plot in the United States of America and quality materials and adhere to industry best practices, ensuring that each project stands the test of time. Trust Agyare Real Estate and Construction Ghana Limited to bring your vision to life with unmatched quality and reliability",
    img: land_field_view,
  },
  {
    id: "6",
    name: "Residential magic",
    location: "Kasoa Hills",
    type: "house",
    desc: " We use the highest quality materials and adhere to industry best practices, ensuring that each project stands the test of time. Trust Agyare Real Estate and Construction Ghana Limited to bring your vision to life with unmatched quality With a strong emphasis on customer satisfaction, we tailor our construction solutions to meet the specific needs of each client. Whether you are building a new home, expanding your business facilities, or developing large-scale industrial structures,",
    img: white_house_,
  },
  {
    id: "7",
    name: "Geo Sensation",
    location: "Kasoa Hills",
    type: "house",
    desc: " We use the highest quality materials and adhere to industry best practices, ensuring that each project stands the test of time. Trust Agyare Real Estate and Construction Ghana Limited to bring your vision to life with unmatched quality With a strong emphasis on customer satisfaction, we tailor our construction solutions to meet the specific needs of each client. Whether you are building a new home, expanding your business facilities, or developing large-scale industrial structures,",
    img: land_geo_fence,
  },
];
