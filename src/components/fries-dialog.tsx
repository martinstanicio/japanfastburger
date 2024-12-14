import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { Fries } from "~/fries";

import { ARS } from "@/lib/currency";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function FriesDialog({ name, price, friesImage }: Fries) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full">
          <FontAwesomeIcon icon={faBasketShopping} />
          <span>Agregar al carrito</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">{name}</DialogTitle>
        </DialogHeader>

        <Image src={friesImage} alt="" className="mx-auto w-full max-w-72" />

        <DialogFooter className="block sm:space-x-0">
          <p className="mb-6 mt-4 text-center text-2xl font-bold">
            {ARS.format(price)}
          </p>

          <Button size="lg" className="w-full">
            <FontAwesomeIcon icon={faBasketShopping} />
            <span>Agregar al carrito</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
