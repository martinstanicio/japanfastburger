import Brand from "./brand";
import SocialIcons from "./social-icons";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-card p-4 text-card-foreground sm:p-8">
      <Brand />
      <SocialIcons />
    </nav>
  );
}
