import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "ink" | "white";
  className?: string;
  to?: "/";
};

export function Logo({ variant = "ink", className, to = "/" }: Props) {
  const src = variant === "white" ? "/brand/logo-white.png" : "/brand/logo-ink.png";
  return (
    <Link
      to={to}
      className={cn("inline-flex items-center", className)}
      aria-label="Planeta Susu, ir al inicio"
    >
      <img
        src={src}
        alt="Planeta Susu"
        className="h-9 w-auto max-w-[9.5rem] object-contain object-left sm:h-10 sm:max-w-[11rem]"
        width={180}
        height={103}
      />
    </Link>
  );
}
