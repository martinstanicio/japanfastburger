import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Brand from "./brand";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 sm:p-8">
      <Brand />

      <Button size="icon" asChild className="sm:hidden">
        <Link href="https://www.instagram.com/japanfastburger/">
          <FontAwesomeIcon icon={faInstagram} />
          <span className="sr-only">Instagram</span>
        </Link>
      </Button>

      <Button asChild className="max-sm:hidden">
        <Link href="https://www.instagram.com/japanfastburger/">
          <FontAwesomeIcon icon={faInstagram} />
          <span>Instagram</span>
        </Link>
      </Button>
    </nav>
  );
}
