import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ARS } from "@/lib/currency";

import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  article: string;
  size: string;
  price: number;
};

export default function CartItem({ article, size, price }: Props) {
  return (
    <Card className="items-center justify-between gap-4 p-6 sm:flex sm:flex-row">
      <CardHeader className="flex w-full flex-row justify-between gap-4 space-y-0 justify-self-start p-0 text-left sm:flex-row-reverse sm:items-center sm:justify-end">
        <div className="space-y-1.5">
          <CardTitle>{article}</CardTitle>
          <CardDescription>Hamburguesa {size}</CardDescription>
        </div>
        <Button size="icon" variant="destructive">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </CardHeader>
      <CardFooter className="flex w-full justify-between gap-4 justify-self-end p-0 sm:justify-end">
        <p className="text-center text-2xl font-bold">{ARS.format(price)}</p>
      </CardFooter>
    </Card>
  );
}
