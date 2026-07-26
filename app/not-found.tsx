import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Ошибка 404</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white">Страница не найдена</h1>
        <p className="mt-4 text-slate-500">Возможно, ссылка устарела или адрес указан неверно.</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950">
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
