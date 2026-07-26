import { Clock3, Handshake, TrendingUp, UsersRound } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  { icon: UsersRound, title: "Привлекает новых клиентов", text: "Понятно объясняет ценность и переводит интерес в целевое действие." },
  { icon: Clock3, title: "Работает 24/7", text: "Отвечает на ключевые вопросы и принимает заявки даже вне рабочего времени." },
  { icon: Handshake, title: "Повышает доверие", text: "Показывает уровень бизнеса ещё до первого разговора с вашей командой." },
  { icon: TrendingUp, title: "Увеличивает продажи", text: "Сокращает путь к решению и помогает рекламе давать лучший результат." },
];

export function Roi() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-gradient-to-br from-cyan/[0.075] via-white/[0.025] to-violet/[0.09] p-6 sm:p-10 lg:p-14">
            <div className="absolute right-[-8rem] top-[-9rem] size-[26rem] rounded-full bg-violet/15 blur-[110px]" />
            <SectionHeading
              eyebrow="04 / Почему сайт окупается"
              title={<>Это не расход. <span className="gradient-text">Это актив бизнеса.</span></>}
              description="Хороший сайт продолжает приносить пользу после запуска и усиливает каждый канал, из которого к вам приходит клиент."
            />

            <div className="relative mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              {items.map((item) => (
                <article key={item.title} className="bg-[#080b13]/90 p-6 transition duration-300 hover:bg-white/[0.045] sm:p-8">
                  <item.icon className="size-6 text-cyan" strokeWidth={1.6} aria-hidden />
                  <h3 className="mt-8 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
