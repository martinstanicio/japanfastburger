import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import links from "~/links";

import { Button } from "./ui/button";

export default function SocialIcons() {
  return (
    <div>
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
    </div>
  );
}
