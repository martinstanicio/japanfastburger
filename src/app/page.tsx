import BurgerMenu from "@/components/burger-menu";
import FriesMenu from "@/components/fries-menu";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="space-y-8">
      <Hero />
      <Separator />
      <section className="space-y-8 p-4 sm:p-8">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Hamburguesas
        </h2>
        <BurgerMenu />
      </section>
      <Separator />
      <section className="space-y-8 p-4 sm:p-8">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Papas fritas
        </h2>
        <FriesMenu />
      </section>
    </main>
  );
}
