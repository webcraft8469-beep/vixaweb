"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";

const navigation = [
  ["Обо мне", "#about"],
  ["Преимущества", "#benefits"],
  ["Процесс", "#process"],
  ["FAQ", "#faq"],
];

function closeMobileMenu(event: React.MouseEvent<HTMLButtonElement>) {
  const menu = event.currentTarget.closest("details");
  if (menu instanceof HTMLDetailsElement) {
    menu.open = false;
  }
}

export function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/[0.07] bg-[#05070d]/90 backdrop-blur-2xl">
        <Container className="flex h-[76px] items-center justify-between">
          <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label="VIXA WEB — на главную">
            <span className="relative size-10 overflow-hidden rounded-xl border border-cyan/20 bg-[#05070d] shadow-[0_0_24px_rgba(64,124,255,.16)]">
              <Image src="/vixa-web-mark.png" alt="" fill sizes="40px" className="object-cover" priority />
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-bold tracking-[0.03em] text-white">
                VIXA <span className="text-cyan">WEB</span>
              </span>
              <span className="mt-1 hidden text-[6px] font-medium uppercase tracking-[0.15em] text-slate-500 min-[380px]:block">
                Crafting modern websites
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
            {navigation.map(([label, href]) => (
              <Link key={href} href={href} className="text-[13px] text-slate-400 transition hover:text-white">
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="hidden min-h-10 items-center rounded-full border border-cyan/25 bg-cyan/10 px-4 text-xs font-semibold text-cyan transition hover:border-cyan/50 hover:bg-cyan/15 sm:inline-flex"
          >
            Обсудить проект
          </Link>

          <span className="size-11 lg:hidden" aria-hidden />
        </Container>
      </header>

      <details className="group lg:hidden">
        <summary
          className="fixed right-4 top-4 z-[110] grid size-11 cursor-pointer list-none place-items-center rounded-full border border-white/10 bg-[#090d17] text-white marker:hidden [&::-webkit-details-marker]:hidden"
          aria-label="Открыть или закрыть меню"
        >
          <Menu className="size-5 group-open:hidden" aria-hidden />
          <X className="hidden size-5 group-open:block" aria-hidden />
        </summary>

        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[76px] z-[90] overflow-y-auto border-t border-white/[0.07] bg-[#05070d]"
        >
          <Container className="flex h-full flex-col justify-between py-10">
            <nav className="grid" aria-label="Мобильная навигация">
              {navigation.map(([label, href]) => (
                <form
                  key={href}
                  action={`/${href}`}
                  method="get"
                  className="border-b border-white/[0.08]"
                >
                  <button
                    type="submit"
                    onClick={closeMobileMenu}
                    className="flex min-h-14 w-full items-center text-left text-xl text-white"
                  >
                    {label}
                  </button>
                </form>
              ))}
            </nav>
            <form action="/#contact" method="get">
              <button
                type="submit"
                onClick={closeMobileMenu}
                className="flex min-h-14 w-full items-center justify-center rounded-full bg-white font-semibold text-slate-950"
              >
                Заказать сайт
              </button>
            </form>
          </Container>
        </div>
      </details>
    </>
  );
}
