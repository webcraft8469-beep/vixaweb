# VIXA WEB

Одностраничный сайт AI web studio на Next.js App Router, TypeScript, Tailwind CSS и Framer Motion.

## Запуск

Требуется Node.js 20.9 или новее.

```bash
npm install
npm run dev
```

Локальный адрес: [http://localhost:3000](http://localhost:3000).

## Проверка и production

```bash
npm run lint
npm run build
npm run start
```

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните значения:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/your_username
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/70000000000
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

`TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` используются только серверным маршрутом `/api/contact` и не должны попадать в публичный репозиторий.

## Структура

- `app` — главная страница, стили, SEO и серверный обработчик заявок.
- `components/landing` — секции лендинга.
- `components/ui` — переиспользуемые UI-компоненты.
- `data` — настройки и контент.
- `lib` — небольшие утилиты.
- `public` — логотипы и 3D-сцена.
