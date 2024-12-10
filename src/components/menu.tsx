import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import burgers from "~/burgers";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";

export default function Menu() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {burgers.map(({ name, description, image }, i) => (
        <Card className="mt-[50%]" key={i}>
          <CardHeader className="relative mt-12">
            <Image
              src={image}
              alt=""
              sizes="auto"
              className="absolute left-1/2 top-2 aspect-video w-[85%] -translate-x-1/2 -translate-y-full object-contain object-bottom"
            />
            <CardTitle>{name}</CardTitle>
            <CardDescription className="text-balance">
              {description}
            </CardDescription>
          </CardHeader>
          <div>
            <CardFooter>
              <Button size="lg" className="w-full">
                <FontAwesomeIcon icon={faBasketShopping} />
                <span>Agregar al carrito</span>
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </section>
  );
}
