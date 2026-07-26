"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Copy, Mail, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

const projectTypes = ["Лендинг", "Корпоративный сайт", "Интернет-магазин", "Редизайн", "Пока не уверен"];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [emailCopyStatus, setEmailCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const reduced = useReducedMotion();
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setEmailCopyStatus("copied");
    } catch {
      const input = document.createElement("textarea");
      input.value = siteConfig.email;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      const copied = document.execCommand("copy");
      input.remove();
      setEmailCopyStatus(copied ? "copied" : "error");
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Не удалось отправить заявку.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Не удалось отправить заявку.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute left-[-12rem] top-1/3 size-[34rem] rounded-full bg-cyan/[0.09] blur-[140px]" />
      <div className="absolute bottom-[-15rem] right-[-10rem] size-[38rem] rounded-full bg-violet/[0.12] blur-[150px]" />
      <Container className="relative">
        <motion.div
          initial={false}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75 }}
          className="glass overflow-hidden rounded-[34px] lg:grid lg:grid-cols-[.85fr_1.15fr]"
        >
          <div className="relative border-b border-white/[0.09] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <div className="section-grid absolute inset-0 opacity-35" />
            <div className="relative">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">06 / Начнём проект</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1] tracking-[-0.055em] text-white sm:text-5xl lg:text-[64px]">
                Расскажите,
                <br />
                что хотите
                <br />
                <span className="gradient-text">создать.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                Отвечу в течение рабочего дня. Первый разговор — знакомство с задачей, без обязательств и навязчивых продаж.
              </p>

              <div className="mt-10 grid gap-3">
                {siteConfig.telegram && (
                  <a
                    href={siteConfig.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-14 items-center justify-between rounded-2xl border border-white/[0.09] bg-white/[0.035] px-4 text-sm text-slate-300 transition hover:border-cyan/30 hover:bg-cyan/[0.06]"
                  >
                    <span className="flex items-center gap-3"><Send className="size-4 text-cyan" />Telegram</span>
                    <ArrowRight className="size-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan" />
                  </a>
                )}
                {siteConfig.whatsapp && (
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-14 items-center justify-between rounded-2xl border border-white/[0.09] bg-white/[0.035] px-4 text-sm text-slate-300 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.06]"
                  >
                    <span className="flex items-center gap-3"><MessageCircle className="size-4 text-emerald-400" />WhatsApp</span>
                    <ArrowRight className="size-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-emerald-400" />
                  </a>
                )}
                <div className="group flex min-h-14 items-center rounded-2xl border border-white/[0.09] bg-white/[0.035] p-1.5 pl-4 text-sm text-slate-300 transition hover:border-violet/30 hover:bg-violet/[0.06]">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-w-0 flex-1 self-stretch items-center gap-3"
                    aria-label={`Написать на email ${siteConfig.email}`}
                  >
                    <Mail className="size-4 shrink-0 text-violet" />
                    <span className="truncate">{siteConfig.email}</span>
                    <span className="ml-auto flex shrink-0 items-center gap-1.5 text-xs text-slate-500 transition group-hover:text-violet">
                      Написать <ArrowUpRight className="size-3.5" />
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={`Скопировать email ${siteConfig.email}`}
                    title="Скопировать email"
                    className="ml-3 grid size-11 shrink-0 place-items-center rounded-xl border border-white/[0.08] text-slate-500 transition hover:border-violet/35 hover:bg-violet/10 hover:text-violet"
                  >
                    {emailCopyStatus === "copied" ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                  </button>
                  <span className="sr-only" aria-live="polite">
                    {emailCopyStatus === "copied" ? "Email скопирован" : emailCopyStatus === "error" ? "Не удалось скопировать email" : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[540px] flex-col items-center justify-center text-center">
                <span className="grid size-16 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan shadow-[0_0_40px_rgba(110,231,255,.14)]">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-white">Заявка отправлена</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Спасибо! Я отвечу по указанному контакту в течение рабочего дня.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-7 text-sm text-cyan hover:text-white">
                  Изменить данные
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5">
                <label className="sr-only" aria-hidden="true">
                  Ваш сайт
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs text-slate-500">
                    Как вас зовут?
                    <input name="name" required autoComplete="name" placeholder="Имя" className="min-h-12 rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan/45" />
                  </label>
                  <label className="grid gap-2 text-xs text-slate-500">
                    Куда ответить?
                    <input name="contact" required autoComplete="email" placeholder="Email или телефон" className="min-h-12 rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan/45" />
                  </label>
                </div>
                <label className="grid gap-2 text-xs text-slate-500">
                  Что нужно сделать?
                  <select name="type" className="min-h-12 rounded-xl border border-white/10 bg-[#090d17] px-4 text-sm text-white outline-none transition focus:border-cyan/45">
                    {projectTypes.map((type) => <option key={type}>{type}</option>)}
                  </select>
                </label>
                <label className="grid gap-2 text-xs text-slate-500">
                  Ориентир по бюджету
                  <select name="budget" className="min-h-12 rounded-xl border border-white/10 bg-[#090d17] px-4 text-sm text-white outline-none transition focus:border-cyan/45">
                    <option>до 50 000 ₸</option>
                    <option>50 000–100 000 ₸</option>
                    <option>100 000–150 000 ₸</option>
                    <option>от 150 000 ₸</option>
                    <option>Нужна консультация</option>
                  </select>
                </label>
                <label className="grid gap-2 text-xs text-slate-500">
                  Расскажите о задаче
                  <textarea name="message" required rows={6} placeholder="Цель сайта, сроки, пожелания и всё, что считаете важным" className="resize-y rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-700 focus:border-cyan/45" />
                </label>
                {submitError ? (
                  <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/[0.07] px-4 py-3 text-sm leading-6 text-red-200">
                    {submitError}
                  </p>
                ) : null}
                <button disabled={submitting} type="submit" className="group mt-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan hover:shadow-[0_0_40px_rgba(110,231,255,.25)] active:scale-[0.99] disabled:cursor-wait disabled:opacity-65">
                  {submitting ? "Отправляем…" : "Отправить заявку"}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </button>
                <p className="text-center text-[10px] leading-5 text-slate-700">
                  Нажимая кнопку, вы соглашаетесь на обработку данных, указанных в форме.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
