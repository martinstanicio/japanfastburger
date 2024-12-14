import Image from "next/image";

import { ARS } from "@/lib/currency";

import { Fries } from "~/fries";

import FriesDialog from "./fries-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function FriesCard(props: Fries) {
  const { name, price, friesImage } = props;

  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-balance">
          {ARS.format(price)}
        </CardDescription>
      </CardHeader>
      <div>
        <CardContent>
          <Image src={friesImage} alt="" />
        </CardContent>
        <CardFooter>
          <FriesDialog {...props} />
        </CardFooter>
      </div>
    </Card>
  );
}
