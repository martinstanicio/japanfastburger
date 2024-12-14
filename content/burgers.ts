import { StaticImageData } from "next/image";

import burgerImage from "@/assets/burger.png";
import datsun240z from "@/assets/datsun-240z.png";
import imprezawrxsti from "@/assets/impreza-wrx-sti.png";
import mazdarx7 from "@/assets/mazda-rx-7.png";
import silvias15 from "@/assets/silvia-s15.png";
import skylinegtr from "@/assets/skyline-gt-r.png";
import supra2jzgte from "@/assets/supra-2jz-gte.png";

export type Burger = {
  name: string;
  description: string;
  carImage: StaticImageData;
  burgerImage: StaticImageData;
};

const burgers: Burger[] = [
  {
    name: "Skyline GT-R",
    description:
      "Dos fetas de cheddar por medallón, acompañado de un crocante bacon.",
    carImage: skylinegtr,
    burgerImage: burgerImage,
  },
  {
    name: "Datsun 240Z",
    description:
      "Dos fetas de cheddar por medallón, ketchup y mostaza, acompañado de cebolla cortada en cubitos.",
    carImage: datsun240z,
    burgerImage: burgerImage,
  },
  {
    name: "Mazda RX-7",
    description: "Dos fetas de cheddar por medallón, lechuga, tomate y huevo.",
    carImage: mazdarx7,
    burgerImage: burgerImage,
  },
  {
    name: "Supra 2JZ-GTE",
    description:
      "Dos fetas de cheddar por medallón, lechuga, tomate y cebolla cortada en aros.",
    carImage: supra2jzgte,
    burgerImage: burgerImage,
  },
  {
    name: "Impreza WRX STI",
    description:
      "Dos fetas de cheddar por medallón, acompañado de un crocante bacon y cebolla a la plancha.",
    carImage: imprezawrxsti,
    burgerImage: burgerImage,
  },
  {
    name: "Silvia S15",
    description:
      "Dos fetas de cheddar por medallón, acompañado de cebolla cocinada a la plancha.",
    carImage: silvias15,
    burgerImage: burgerImage,
  },
];

export const prices: Record<string, number> = {
  simple: 10000,
  double: 12000,
  triple: 14000,
};

export default burgers;
