import {
  Gauge,
  Headphones,
  LayoutTemplate,
  Search,
  Smartphone,
  Zap,
} from "lucide-react";

function normalizeTelegramUrl(value = "") {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\/(www\.)?t\.me\//i.test(trimmed)) return trimmed;

  const username = trimmed.replace(/^@/, "").replace(/^t\.me\//i, "");
  return username ? `https://t.me/${username}` : "";
}

function normalizeWhatsAppUrl(value = "") {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";

  const internationalNumber = digits.length === 10 ? `7${digits}` : digits;
  return `https://wa.me/${internationalNumber}`;
}

export const siteConfig = {
  name: "VIXA WEB",
  title: "AI web studio — премиальные сайты для бизнеса",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Разрабатываю премиальные сайты, которые усиливают доверие к бизнесу и превращают посетителей в клиентов.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "webcraft8469@gmail.com",
  telegram: normalizeTelegramUrl(process.env.NEXT_PUBLIC_TELEGRAM_URL),
  whatsapp: normalizeWhatsAppUrl(process.env.NEXT_PUBLIC_WHATSAPP_URL),
};

export const benefits = [
  {
    title: "Современный дизайн",
    description: "Уникальная визуальная система, которая выделяет бренд среди конкурентов.",
    icon: LayoutTemplate,
  },
  {
    title: "Быстрая разработка",
    description: "Понятный процесс и запуск без бесконечных согласований.",
    icon: Zap,
  },
  {
    title: "Адаптация под телефон",
    description: "Интерфейс удобно работает на любом экране и устройстве.",
    icon: Smartphone,
  },
  {
    title: "SEO-оптимизация",
    description: "Правильная структура, метаданные и техническая база для поиска.",
    icon: Search,
  },
  {
    title: "Высокая скорость",
    description: "Оптимизированные изображения, код и загрузка ключевого контента.",
    icon: Gauge,
  },
  {
    title: "Поддержка после запуска",
    description: "Не пропадаю после публикации: помогаю с обновлениями и развитием.",
    icon: Headphones,
  },
];

export const processSteps = [
  ["01", "Обсуждение проекта", "Фиксируем цель, аудиторию, объём и ожидаемый результат."],
  ["02", "Создание дизайна", "Проектирую структуру и собираю премиальную визуальную концепцию."],
  ["03", "Разработка", "Переношу дизайн в быстрый, адаптивный и управляемый продукт."],
  ["04", "Тестирование", "Проверяю сценарии, устройства, скорость и доступность."],
  ["05", "Публикация", "Подключаю домен, аналитику и выпускаю сайт в production."],
  ["06", "Поддержка", "Помогаю развивать продукт после запуска и смотреть на данные."],
];

export const faqItems = [
  {
    question: "Сколько времени занимает разработка?",
    answer:
      "Лендинг обычно занимает 2–4 недели, многостраничный сайт — 4–8 недель. Точный срок зависит от объёма, интеграций и скорости согласования.",
  },
  {
    question: "Сколько стоит сайт?",
    answer:
      "Стоимость рассчитывается после короткого брифа. Вы получаете фиксированный состав работ, этапы и прозрачную смету до старта.",
  },
  {
    question: "Можно ли редактировать контент самостоятельно?",
    answer:
      "Да. При необходимости подключаю удобную CMS и передаю короткую инструкцию, чтобы команда могла обновлять тексты и проекты без разработчика.",
  },
  {
    question: "Что нужно предоставить для начала?",
    answer:
      "Достаточно рассказать о бизнесе, задаче и желаемом результате. Структуру, визуальное направление и техническое решение предложу сам.",
  },
  {
    question: "Вы помогаете после запуска?",
    answer:
      "Да. Включаю гарантийный период, а затем могу сопровождать сайт, развивать разделы и улучшать конверсию на основе аналитики.",
  },
];
