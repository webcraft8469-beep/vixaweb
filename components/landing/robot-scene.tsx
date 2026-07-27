"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

type PerformanceNavigator = Navigator & {
  connection?: { saveData?: boolean };
  deviceMemory?: number;
};

function RobotFallback() {
  return (
    <div className="grid h-full place-items-center" aria-hidden="true">
      <div className="relative size-40 rounded-full border border-cyan/15 bg-[radial-gradient(circle,rgba(110,231,255,.12),rgba(167,139,250,.05)_50%,transparent_72%)] shadow-[0_0_80px_rgba(110,231,255,.08)]" />
    </div>
  );
}

export function RobotScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [eligible, setEligible] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const performanceNavigator = navigator as PerformanceNavigator;
    const lowMemory =
      typeof performanceNavigator.deviceMemory === "number" &&
      performanceNavigator.deviceMemory < 4;

    if (
      !desktop.matches ||
      reducedMotion.matches ||
      performanceNavigator.connection?.saveData ||
      lowMemory
    ) {
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearViewport(entry.isIntersecting),
      { rootMargin: "240px 0px" },
    );
    observer.observe(element);

    const timer = window.setTimeout(() => setEligible(true), 800);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const showSpline = eligible && nearViewport;

  return (
    <div
      ref={containerRef}
      className="relative hidden h-[590px] min-w-0 lg:block"
      aria-label="Интерактивный 3D-робот"
    >
      <div className="pointer-events-none absolute inset-[14%_5%_8%] rounded-full bg-[radial-gradient(circle,rgba(110,231,255,.19),rgba(167,139,250,.08)_48%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-8 bottom-12 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      {showSpline ? (
        <Suspense fallback={<RobotFallback />}>
          <Spline scene="/robot.splinecode" className="relative z-10 size-full" />
        </Suspense>
      ) : (
        <RobotFallback />
      )}
    </div>
  );
}