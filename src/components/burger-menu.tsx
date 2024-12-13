import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import burgers from "~/burgers";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Splash from "./splash";
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

export default function BurgerMenu() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {burgers.map(({ name, description, image, burger }, i) => (
        <Card className="mt-[50%]" key={i}>
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

                  <Image
                    src={burger}
                    alt=""
                    className="mx-auto w-full max-w-72"
                  />

                  <div className="space-y-2">
                    <div className="space-y-1">
                      <Label>Medallones de carne</Label>
                      <Select defaultValue="simple">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simple">Simple</SelectItem>
                          <SelectItem value="doble">Doble</SelectItem>
                          <SelectItem value="triple">Triple</SelectItem>
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

                  <DialogFooter>
                    <Button size="lg" className="w-full">
                      <FontAwesomeIcon icon={faBasketShopping} />
                      <span>Agregar al carrito</span>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </div>
        </Card>
      ))}
    </section>
  );
}
