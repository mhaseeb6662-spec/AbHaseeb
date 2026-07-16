"use client";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "./providers/ThemeContext";

export const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      data-cursor-hover
      className={`glass relative flex h-10 w-10 items-center justify-center rounded-full text-paper-dim transition-colors hover:text-cyan ${className}`}
    >
      {theme === "dark" ? <HiOutlineSun className="h-[18px] w-[18px]" /> : <HiOutlineMoon className="h-[18px] w-[18px]" />}
    </button>
  );
};
