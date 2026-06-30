import logo from "@/assets/cft-logo.png.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Link to="/" aria-label="Corefusion Technologies — Home" className="inline-flex items-center gap-2 focus-ring rounded">
      <img src={logo.url} alt="" className={className} />
      <span className="sr-only">Corefusion Technologies</span>
    </Link>
  );
}
