import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  contact?: unknown;
  type?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
};

const limits = {
  name: 80,
  contact: 120,
  type: 80,
  budget: 80,
  message: 2000,
} as const;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Некорректные данные формы." }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, limits.name);
  const contact = clean(body.contact, limits.contact);
  const projectType = clean(body.type, limits.type);
  const budget = clean(body.budget, limits.budget);
  const message = clean(body.message, limits.message);

  if (!name || !contact || !projectType || !budget || !message) {
    return NextResponse.json(
      { error: "Заполните все обязательные поля." },
      { status: 400 },
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Форма ещё не подключена к новому Telegram-боту." },
      { status: 503 },
    );
  }

  const telegramMessage = [
    "<b>Новая заявка с сайта VIXA WEB</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Контакт:</b> ${escapeHtml(contact)}`,
    `<b>Тип проекта:</b> ${escapeHtml(projectType)}`,
    `<b>Бюджет:</b> ${escapeHtml(budget)}`,
    "",
    "<b>Задача:</b>",
    escapeHtml(message),
  ].join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(10_000),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Telegram не принял заявку. Проверьте настройки нового бота." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Не удалось связаться с Telegram. Попробуйте ещё раз позже." },
      { status: 502 },
    );
  }
}
