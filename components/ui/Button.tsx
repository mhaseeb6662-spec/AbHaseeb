"use client";

import { ButtonHTMLAttributes, ReactNode, MouseEvent, useState } from "react";
import clsx from "clsx";
import { MagneticButton } from "../MagneticButton";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "default" | "lg";
  children: ReactNode;
}

export const Button = ({ className = "", size = "default", children, onClick, ...props }: ButtonProps) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
    onClick?.(e);
  };

  return (
    <MagneticButton strength={0.25}>
      <button
        onClick={handleClick}
        data-cursor-hover
        className={clsx(
          "relative overflow-hidden rounded-full font-semibold font-mono uppercase tracking-wide",
          "bg-gradient-to-r from-royal via-violet to-royal bg-[length:200%_100%] text-white transition-all duration-500",
          "hover:bg-[position:100%_0] hover:shadow-[0_0_40px_-6px_rgba(61,91,255,0.65)]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        {ripples.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/30 animate-ping"
            style={{ left: r.x - 8, top: r.y - 8, width: 16, height: 16 }}
          />
        ))}
      </button>
    </MagneticButton>
  );
};
