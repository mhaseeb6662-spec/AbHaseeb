"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { siteConfig } from "@/lib/data";

export const Loader = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReduced ? 400 : 2200;
    const start = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };
    raf = requestAnimationFrame(tick);

    const finish = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.style.overflow = "";
          setVisible(false);
        },
      });
      if (logoRef.current) {
        tl.to(logoRef.current, { scale: 1.15, opacity: 0, duration: 0.4, ease: "power2.in" });
      }
      tl.to(wrapRef.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "-=0.15");
    };

    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 24, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      );
    }

    return () => cancelAnimationFrame(raf);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink"
      aria-hidden="true"
    >
      <div className="aurora">
        <div className="aurora-blob animate-aurora h-[38vw] w-[38vw] bg-royal/50 left-[8%] top-[10%]" />
        <div
          className="aurora-blob animate-aurora h-[32vw] w-[32vw] bg-violet/40 right-[10%] top-[25%]"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div ref={logoRef} className="relative z-10 flex flex-col items-center gap-6">
        <div className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {siteConfig.shortName.split("").map((ch, i) => (
            <span
              key={i}
              className="inline-block bg-gradient-to-r from-royal-soft via-violet to-cyan bg-clip-text text-transparent"
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </div>

        <div className="h-px w-52 overflow-hidden bg-line sm:w-64">
          <div
            className="h-full bg-gradient-to-r from-royal via-violet to-cyan transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};
