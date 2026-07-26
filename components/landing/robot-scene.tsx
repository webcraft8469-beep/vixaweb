"use client";

import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function RobotScene() {
  return (
    <div
      className="relative hidden h-[590px] min-w-0 lg:block"
      aria-label="Интерактивный 3D-робот"
    >
      <div className="pointer-events-none absolute inset-[14%_5%_8%] rounded-full bg-[radial-gradient(circle,rgba(110,231,255,.19),rgba(167,139,250,.08)_48%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-8 bottom-12 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <Suspense
        fallback={
          <div className="grid h-full place-items-center" role="status" aria-label="Загрузка 3D-робота">
            <span className="size-10 animate-spin rounded-full border-2 border-white/10 border-t-cyan" />
          </div>
        }
      >
        <Spline scene="/robot.splinecode" className="relative z-10 size-full" />
      </Suspense>
    </div>
  );
}
