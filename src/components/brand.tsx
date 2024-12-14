import Link from "next/link";

import { cn } from "@/lib/utils";

export default function Brand({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-4", className)}
      {...props}
    >
      <div className="size-8 rounded-full bg-red-500" />
      <span className="text-xl font-bold max-sm:sr-only">
        Japan Fast Burger
      </span>
    </Link>
  );
}
