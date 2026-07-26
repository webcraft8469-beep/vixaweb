"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { processSteps } from "@/data/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  const reduced = useReducedMotion();

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[160px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="03 / Этапы работы"
          title={<>От идеи до запуска — <span className="text-slate-500">спокойно и прозрачно.</span></>}
          description="Вы всегда понимаете, что происходит сейчас, какой результат будет на следующем этапе и когда сайт выйдет в production."
        />

        <div className="relative mt-16 lg:mt-20">
          <div className="absolute bottom-0 left-[21px] top-0 w-px bg-white/[0.09] lg:left-1/2" />
          <motion.div
            className="absolute left-[21px] top-0 w-px origin-top bg-gradient-to-b from-cyan via-violet to-transparent lg:left-1/2"
            initial={reduced ? false : { scaleY: 0, height: "100%" }}
            whileInView={reduced ? undefined : { scaleY: 1 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 1.6, ease: [0.2, 0.75, 0.25, 1] }}
          />

          <div className="space-y-7 lg:space-y-0">
            {processSteps.map(([number, title, description], index) => {
              const right = index % 2 === 1;
              return (
                <motion.article
                  key={number}
                  initial={false}
                  whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: 0.1 }}
                  className={`relative grid min-h-52 grid-cols-[44px_1fr] gap-5 lg:grid-cols-2 lg:gap-20 ${right ? "lg:text-left" : "lg:text-right"}`}
                >
                  <span className="relative z-10 mt-5 grid size-11 place-items-center rounded-full border border-cyan/30 bg-[#0a0e18] font-mono text-[10px] text-cyan shadow-[0_0_30px_rgba(110,231,255,.12)] lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <Check className="size-4" aria-hidden />
                  </span>
                  <div className={`glass rounded-3xl p-6 sm:p-7 ${right ? "lg:col-start-2" : "lg:col-start-1"}`}>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">{number}</span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
