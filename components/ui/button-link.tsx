import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 active:scale-[0.98]",
        variant === "primary" &&
          "bg-white text-slate-950 shadow-[0_0_35px_rgba(110,231,255,.16)] hover:bg-cyan hover:shadow-[0_0_45px_rgba(110,231,255,.32)]",
        variant === "secondary" &&
          "border border-white/12 bg-white/[0.055] text-white backdrop-blur-xl hover:border-cyan/40 hover:bg-cyan/10",
        variant === "ghost" && "text-slate-300 hover:text-white",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}
