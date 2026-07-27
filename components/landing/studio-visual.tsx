import Image from "next/image";
import { Gauge, LayoutDashboard, MousePointer2, Smartphone, Sparkles } from "lucide-react";

export function StudioVisual() {
  return (
    <div className="relative hidden h-[590px] min-w-0 lg:block" aria-label="Пример современного сайта VIXA WEB">
      <div className="pointer-events-none absolute inset-[12%_2%_8%] rounded-full bg-[radial-gradient(circle,rgba(110,231,255,.16),rgba(167,139,250,.08)_48%,transparent_72%)] blur-3xl" />

      <div className="glass absolute inset-x-2 top-12 overflow-hidden rounded-[30px] border-white/[0.12] shadow-[0_36px_100px_rgba(0,0,0,.42)] xl:inset-x-5">
        <div className="flex h-12 items-center justify-between border-b border-white/[0.08] bg-black/20 px-4">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2 rounded-full bg-rose-400/70" />
            <span className="size-2 rounded-full bg-amber-300/70" />
            <span className="size-2 rounded-full bg-emerald-300/70" />
          </div>
          <div className="rounded-full border border-white/[0.08] bg-white/[0.04] px-10 py-1.5 font-mono text-[8px] tracking-[0.12em] text-slate-600">
            vixaweb.studio
          </div>
          <LayoutDashboard className="size-4 text-slate-600" aria-hidden />
        </div>

        <div className="section-grid relative min-h-[420px] overflow-hidden p-6">
          <div className="absolute right-[-5rem] top-[-6rem] size-72 rounded-full bg-violet/15 blur-[90px]" />
          <div className="absolute bottom-[-6rem] left-[-5rem] size-64 rounded-full bg-cyan/10 blur-[80px]" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="relative size-8 overflow-hidden rounded-lg border border-cyan/20 bg-black/40">
                <Image src="/vixa-web-mark.png" alt="" fill sizes="32px" className="object-cover" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.04em] text-white">VIXA <span className="text-cyan">WEB</span></span>
            </div>
            <div className="flex gap-4 text-[8px] uppercase tracking-[0.12em] text-slate-600">
              <span>Подход</span>
              <span>Процесс</span>
              <span>Контакты</span>
            </div>
          </div>

          <div className="relative mt-16 max-w-[330px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/15 bg-cyan/[0.06] px-3 py-1.5 text-[8px] uppercase tracking-[0.16em] text-cyan">
              <Sparkles className="size-3" aria-hidden /> Digital experience
            </div>
            <p className="text-[40px] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
              Сайт, который
              <span className="block bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">двигает бизнес.</span>
            </p>
            <p className="mt-4 max-w-[275px] text-[10px] leading-5 text-slate-500">
              Чистый интерфейс, сильная подача и понятный путь пользователя к заявке.
            </p>
            <span className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-[9px] font-semibold text-slate-950">
              Обсудить проект
            </span>
          </div>

          <div className="absolute bottom-5 right-5 grid w-[145px] gap-2.5">
            <div className="rounded-2xl border border-white/[0.09] bg-black/35 p-3 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <Gauge className="size-4 text-cyan" aria-hidden />
                <span className="font-mono text-[8px] text-emerald-300">FAST</span>
              </div>
              <p className="mt-5 text-2xl font-semibold text-white">98</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-slate-600">Performance</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.09] bg-black/35 p-3 backdrop-blur-md">
              <Smartphone className="size-4 text-violet" aria-hidden />
              <div>
                <p className="text-[9px] font-medium text-white">Mobile-first</p>
                <p className="mt-1 text-[7px] text-slate-600">Любой экран</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-24 flex items-center gap-2 rounded-full border border-white/10 bg-[#090d17]/90 px-3 py-2 text-[9px] text-slate-400 shadow-xl backdrop-blur-lg">
        <MousePointer2 className="size-3.5 text-cyan" aria-hidden /> Понятный UX
      </div>
      <div className="absolute bottom-12 right-0 rounded-full border border-violet/20 bg-[#090d17]/90 px-3 py-2 text-[9px] text-violet shadow-xl backdrop-blur-lg">
        Адаптив · SEO · Скорость
      </div>
    </div>
  );
}