import burgers from "~/burgers";

import BurgerCard from "./burger-card";

export default function BurgerMenu() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {burgers.map((burgerProps, i) => (
        <BurgerCard key={i} {...burgerProps} />
      ))}
    </section>
  );
}
