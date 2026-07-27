import Image from "next/image";

export function StudioVisual() {
  return (
    <div
      className="relative hidden h-[590px] min-w-0 select-none lg:block"
      aria-label="Фирменная композиция VIXA WEB"
    >
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,.24)_0%,rgba(124,58,237,.13)_35%,transparent_70%)] blur-3xl" />

      <div className="absolute left-1/2 top-1/2 size-[430px] -translate-x-1/2 -translate-y-1/2 xl:size-[480px]">
        <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
        <div className="absolute inset-8 rounded-full border border-cyan/[0.12]" />
        <div className="absolute inset-[4.5rem] rounded-full border border-violet/[0.14]" />

        <div className="absolute inset-0 animate-[spin_28s_linear_infinite] rounded-full motion-reduce:animate-none">
          <span className="absolute left-[15%] top-[12%] size-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(110,231,255,.95)]" />
          <span className="absolute bottom-[18%] right-[8%] size-1.5 rounded-full bg-violet shadow-[0_0_16px_rgba(167,139,250,.9)]" />
        </div>

        <div className="absolute inset-9 animate-[spin_20s_linear_infinite_reverse] rounded-full motion-reduce:animate-none">
          <span className="absolute right-[5%] top-1/2 h-px w-14 bg-gradient-to-r from-transparent to-cyan/70" />
          <span className="absolute bottom-[8%] left-[18%] h-px w-10 rotate-45 bg-gradient-to-r from-violet/70 to-transparent" />
        </div>

        <div className="absolute inset-[4.5rem]">
          <div className="absolute inset-3">
            <Image
              src="/vixa-web-mark.png"
              alt="Логотип VIXA WEB"
              fill
              priority
              sizes="320px"
              className="brand-logo-pulse object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-[5%] top-[21%] flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan/60" />
        Digital studio
      </div>

      <div className="absolute bottom-[15%] right-[3%] text-right">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/75">Design · Code · Growth</p>
        <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-slate-600">VIXA WEB / 2026</p>
      </div>
    </div>
  );
}

