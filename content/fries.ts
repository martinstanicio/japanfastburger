import { StaticImageData } from "next/image";

import friesImage from "@/assets/fries.png";

export type Fries = {
  name: string;
  price: number;
  friesImage: StaticImageData;
};

const fries: Fries[] = [
  {
    name: "Clásicas",
    price: 6000,
    friesImage: friesImage,
  },
  {
    name: "Cheddar",
    price: 7000,
    friesImage: friesImage,
  },
  {
    name: "Cheddar & Bacon",
    price: 8000,
    friesImage: friesImage,
  },
  {
    name: "Cheddar, Bacon & Verdeo",
    price: 9000,
    friesImage: friesImage,
  },
];

export default fries;
