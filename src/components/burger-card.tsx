import Image from "next/image";

import { Burger } from "~/burgers";

import BurgerDialog from "./burger-dialog";
import Splash from "./splash";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function BurgerCard(props: Burger) {
  const { name, description, image, burger } = props;

  return (
    <Card className="mx-auto mt-[50%] max-w-96">
      <CardHeader className="relative mt-12">
        <Splash className="absolute left-1/2 top-36 -z-10 w-full -translate-x-1/2 -translate-y-full fill-primary" />
        <Image
          src={image}
          alt=""
          sizes="auto"
          className="absolute left-1/2 top-2 aspect-video w-[85%] -translate-x-1/2 -translate-y-full object-contain object-bottom drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)]"
        />
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-balance">
          {description}
        </CardDescription>
      </CardHeader>
      <div>
        <CardContent>
          <Image src={burger} alt="" />
        </CardContent>
        <CardFooter>
          <BurgerDialog {...props} />
        </CardFooter>
      </div>
    </Card>
  );
}
