"use client";

import { motion, useReducedMotion } from "framer-motion";
import { benefits } from "@/data/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Benefits() {
  const reduced = useReducedMotion();

  return (
    <section id="benefits" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan/25 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-[150px]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="02 / Почему выбирают меня"
          title={<>Каждая деталь работает <span className="text-slate-500">на доверие и заявку.</span></>}
          description="Не добавляю технологии ради технологий. Каждый инструмент решает конкретную задачу клиента и посетителя."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={false}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.62, delay: index * 0.06 }}
              whileHover={reduced ? undefined : { y: -7 }}
              className="glow-border glass group relative min-h-64 overflow-hidden rounded-3xl p-6 sm:p-7"
            >
              <div className="absolute right-0 top-0 h-36 w-36 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan/[0.08] blur-3xl transition group-hover:bg-violet/[0.13]" />
              <span className="relative grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-cyan transition duration-300 group-hover:scale-110 group-hover:border-cyan/30 group-hover:bg-cyan/10">
                <benefit.icon className="size-5" strokeWidth={1.7} aria-hidden />
              </span>
              <h3 className="relative mt-10 text-xl font-semibold tracking-[-0.025em] text-white">{benefit.title}</h3>
              <p className="relative mt-3 text-sm leading-6 text-slate-500">{benefit.description}</p>
              <span className="absolute bottom-6 right-7 font-mono text-[10px] text-slate-700">0{index + 1}</span>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
