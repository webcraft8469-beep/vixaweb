import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8">
      <Container className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="VIXA WEB — на главную">
          <span className="relative size-9 overflow-hidden rounded-lg border border-cyan/20 bg-[#05070d]">
            <Image src="/vixa-web-mark.png" alt="" fill sizes="36px" className="object-cover" />
          </span>
          <span>
            <span className="block text-sm font-bold tracking-[0.04em] text-white">{siteConfig.name}</span>
            <span className="mt-1 block text-[7px] uppercase tracking-[0.15em] text-slate-600">Crafting modern websites</span>
          </span>
        </Link>
        <p className="text-xs text-slate-600">Премиальные сайты для бизнеса · 2026</p>
        <Link href="#top" className="inline-flex min-h-11 items-center gap-2 self-start text-xs text-slate-500 transition hover:text-cyan sm:self-auto">
          Наверх <ArrowUp className="size-3.5" />
        </Link>
      </Container>
    </footer>
  );
}
