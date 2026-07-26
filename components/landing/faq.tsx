"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { faqItems } from "@/data/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <SectionHeading
            eyebrow="05 / FAQ"
            title={<>До старта должно быть <span className="text-slate-500">всё понятно.</span></>}
            description="Если вашего вопроса здесь нет — напишите. Отвечу без сложных терминов и продажного давления."
          />

          <div className="border-t border-white/[0.1]">
            {faqItems.map((item, index) => {
              const active = open === index;
              return (
                <article key={item.question} className="border-b border-white/[0.1]">
                  <button
                    type="button"
                    className="flex min-h-20 w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={active}
                    onClick={() => setOpen(active ? -1 : index)}
                  >
                    <span className="text-base font-medium text-white sm:text-lg">{item.question}</span>
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full border transition ${active ? "border-cyan/35 bg-cyan/10 text-cyan" : "border-white/10 text-slate-500"}`}>
                      {active ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-12 text-sm leading-7 text-slate-500">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
