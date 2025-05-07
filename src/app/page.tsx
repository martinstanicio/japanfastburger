import BurgerMenu from "@/components/burger-menu";
import FriesMenu from "@/components/fries-menu";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <Separator />
      <section
        className="space-y-8 p-8 px-4 sm:space-y-16 sm:py-16"
        id="hamburguesas"
      >
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Hamburguesas
        </h2>
        <BurgerMenu />
      </section>
      <Separator />
      <section
        className="space-y-8 p-8 px-4 sm:space-y-16 sm:py-16"
        id="papas-fritas"
      >
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Papas fritas
        </h2>
        <FriesMenu />
      </section>
    </main>
  );
}
