import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
