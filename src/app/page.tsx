import Hero from "@/components/hero";
import Menu from "@/components/menu";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="space-y-8">
      <Hero />
      <Separator />
      <section className="p-4 sm:p-8">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Hamburguesas
        </h2>
        <Menu />
      </section>
    </main>
  );
}
