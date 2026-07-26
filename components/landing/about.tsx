import { ArrowUpRight, BadgeCheck, Layers3, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  { icon: Sparkles, title: "Не шаблон, а характер", text: "Дизайн строится вокруг продукта, аудитории и вашей сильной стороны." },
  { icon: Layers3, title: "Один ответственный", text: "Стратегия, дизайн и разработка связаны в одном процессе без потери смысла." },
  { icon: BadgeCheck, title: "Результат после запуска", text: "Сайт остаётся удобным инструментом, а не красивой презентацией в вакууме." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              eyebrow="01 / Подход"
              title={<>Ваш бизнес заслуживает <span className="text-slate-500">сильной цифровой формы.</span></>}
            />
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <p className="text-pretty text-xl leading-8 text-slate-300 sm:text-2xl sm:leading-9">
                Я создаю сайты не для строки в резюме, а для конкретной бизнес-задачи: объяснить ценность, укрепить
                доверие и привести посетителя к действию.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
                Погружаюсь в продукт, убираю лишнее и собираю цельный опыт — от первого экрана до заявки. Клиент получает
                современный сайт, которым удобно пользоваться, управлять и гордиться.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4">
              {principles.map((item, index) => (
                <Reveal key={item.title} delay={0.1 + index * 0.07}>
                  <article className="group glass flex gap-4 rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan/25">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-cyan/15 bg-cyan/[0.07] text-cyan">
                      <item.icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="flex items-center gap-2 font-semibold text-white">
                        {item.title}
                        <ArrowUpRight className="size-4 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-500">{item.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] sm:grid-cols-4">
          {[
            ["Full-stack", "дизайн и разработка в одном процессе"],
            ["Mobile-first", "адаптивность с первого экрана"],
            ["Next.js", "современный production-стек"],
            ["Под ключ", "от идеи до рабочего запуска"],
          ].map(([value, label], index) => (
            <div key={label} className={`p-6 sm:p-8 ${index < 3 ? "sm:border-r sm:border-white/[0.08]" : ""} ${index < 2 ? "border-b border-white/[0.08] sm:border-b-0" : ""}`}>
              <strong className="gradient-text block text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{value}</strong>
              <span className="mt-2 block text-xs leading-5 text-slate-500">{label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
