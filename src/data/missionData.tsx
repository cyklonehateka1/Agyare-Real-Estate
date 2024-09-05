import { Icons } from "@/assets/Assets";

interface Mission {
  icon: React.ReactNode;
  title: string;
  description: string;
  id: number;
}

export const missionData: Mission[] = [
  {
    icon: <Icons.Target />,
    id: 1,
    title: "Our mission",
    description:
      "At Agyare Real Estates Limited, our mission is to empower individuals, corporate institutions, and government entities to acquire fully documented and serviced plots of land with ease. We are dedicated to simplifying the land acquisition process, ensuring that our clients secure land that is ready for development, backed by comprehensive documentation.",
  },
  {
    icon: <Icons.View />,
    id: 2,
    title: "Our Vision",
    description:
      "Our vision is to set the highest standards in the real estate industry, helping individuals and organizations achieve security in land ownership and ease in property creation. We aim to be the leading provider of secure and well-documented land, enabling our clients to build their dreams on a solid foundation.",
  },
  {
    icon: <Icons.Diamond />,
    id: 3,
    title: "Our value positioning",
    description:
      "We position ourselves as trusted experts in managing, documenting, and guiding our clients through the process of self-development and property creation. Our focus is on delivering value through effective management and clear guidance, ensuring that our clients can confidently develop their properties.",
  },
];
