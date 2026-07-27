"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { RobotScene } from "@/components/landing/robot-scene";

const words = ["продают", "убеждают", "впечатляют", "работают"];
const particles = Array.from({ length: 10 }, (_, index) => ({
  left: `${(index * 37) % 97}%`,
  top: `${(index * 53) % 91}%`,
  delay: (index % 8) * 0.38,
  duration: 4.8 + (index % 5) * 0.7,
}));

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="noise relative flex min-h-screen min-h-[100svh] items-center overflow-hidden pt-28" aria-labelledby="hero-title">
      <div className="section-grid absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-[22%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[130px]" />
      <div className="absolute right-[-12rem] top-[-8rem] h-[38rem] w-[38rem] rounded-full bg-violet/15 blur-[140px]" />
      <div className="absolute bottom-[-16rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-blue-600/10 blur-[120px]" />

      <motion.div
        aria-hidden
        className="absolute left-[8%] top-[12%] h-px w-[42%] origin-left bg-gradient-to-r from-transparent via-cyan/70 to-transparent"
        animate={reduced ? undefined : { scaleX: [0.2, 1, 0.35], opacity: [0.1, 0.8, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[5%] top-[34%] h-[34%] w-px origin-top bg-gradient-to-b from-transparent via-violet/70 to-transparent"
        animate={reduced ? undefined : { scaleY: [0.25, 1, 0.4], opacity: [0.1, 0.75, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute size-1 rounded-full bg-cyan/70 shadow-[0_0_12px_rgba(110,231,255,.8)]"
            style={{ left: particle.left, top: particle.top }}
            animate={reduced ? undefined : { y: [0, -22, 0], opacity: [0.12, 0.8, 0.12], scale: [0.6, 1, 0.6] }}
            transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <Container className="relative z-10 py-16 sm:py-24">
        <div className="grid items-center lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,.85fr)] lg:gap-0">
          <div className="relative z-10 max-w-[820px]">
          <motion.h1
            id="hero-title"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.2, 0.75, 0.25, 1] }}
            className="text-balance text-[clamp(2.65rem,13vw,3.15rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:text-[clamp(3.15rem,7vw,6.5rem)] sm:leading-[0.88] sm:tracking-[-0.07em]"
          >
            Создаю сайты,
            <br />
            которые{" "}
            <span className="hero-word-rotator relative inline-grid min-w-[7ch] align-baseline sm:min-w-[8.3ch]" aria-hidden="true">
              {words.map((item) => (
                <span key={item} className="hero-word gradient-text">
                  {item}
                </span>
              ))}
            </span>
            <span className="sr-only">продают</span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-8 max-w-2xl text-pretty text-base leading-7 text-slate-400 sm:text-xl sm:leading-8"
          >
            Проектирую премиальные digital-продукты для бизнеса: сильная подача, понятный путь к заявке и
            технология, которая не тормозит рост.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#about" className="sm:min-w-48">Узнать подробнее</ButtonLink>
            <ButtonLink href="#contact" variant="secondary" className="sm:min-w-44">Заказать сайт</ButtonLink>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500"
          >
            {["Фиксированные этапы", "Адаптив включён", "Поддержка после запуска"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-cyan" aria-hidden />
                {item}
              </span>
            ))}
          </motion.div>
          </div>

          <RobotScene />
        </div>

        <motion.a
          href="#about"
          aria-label="Перейти к следующему разделу"
          className="absolute bottom-1 right-5 hidden size-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-cyan/30 hover:text-cyan sm:grid lg:right-10"
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.a>
      </Container>
    </section>
  );
}
