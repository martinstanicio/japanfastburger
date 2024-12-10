import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-8">
      <span className="font-bold">Japan Fast Burger</span>

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
