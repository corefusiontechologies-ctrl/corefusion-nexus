import logo from "@/assets/cft-logo.png.asset.json";
import { Link } from "@tanstack/react-router";
import { assetUrl } from "@/lib/assets";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Link to="/" aria-label="CoreFusion Technologies — Home" className="inline-flex items-center gap-2 focus-ring rounded">
      <img src={assetUrl(logo.url)} alt="CoreFusion Technologies logo" className={className} />
      <span className="sr-only">CoreFusion Technologies</span>
    </Link>
  );
}
