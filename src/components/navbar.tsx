import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import links from "~/links";

import Brand from "./brand";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-background p-4 sm:p-8">
      <Brand />

      <div className="flex gap-2 sm:hidden">
        {links.map(({ name, href, icon }, i) => (
          <Button size="icon" asChild key={i}>
            <Link href={href} target="_blank">
              <FontAwesomeIcon icon={icon} />
              <span className="sr-only">{name}</span>
            </Link>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-2 max-sm:hidden">
        {links.map(({ name, href, icon }, i) => (
          <Button asChild key={i}>
            <Link href={href} target="_blank">
              <FontAwesomeIcon icon={icon} />
              <span>{name}</span>
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}
