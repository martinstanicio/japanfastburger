"use client";

import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

import { Burger, prices } from "~/burgers";

import { ARS } from "@/lib/currency";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function BurgerDialog({
  name,
  description,
  burgerImage,
}: Burger) {
  const [size, setSize] = useState("simple");

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
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <Image src={burgerImage} alt="" className="mx-auto w-full max-w-72" />

        <div className="space-y-2">
          <div className="space-y-1">
            <Label>Medallones de carne</Label>
            <Select defaultValue="simple" onValueChange={setSize}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="simple">
                  Simple - {ARS.format(prices.simple)}
                </SelectItem>
                <SelectItem value="double">
                  Doble - {ARS.format(prices.double)}
                </SelectItem>
                <SelectItem value="triple">
                  Triple - {ARS.format(prices.triple)}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label>Tipo de pan</Label>
            <Select defaultValue="brioche">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brioche">Pan brioche</SelectItem>
                <SelectItem value="queso">Pan de queso</SelectItem>
                <SelectItem value="papa">Pan de papa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="block sm:space-x-0">
          <p className="mb-6 mt-4 text-center text-2xl font-bold">
            {ARS.format(prices[size])}
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
