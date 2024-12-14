import fries from "~/fries";

import FriesCard from "./fries-card";

export default function FriesMenu() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {fries.map((friesProps, i) => (
        <FriesCard key={i} {...friesProps} />
      ))}
    </section>
  );
}
