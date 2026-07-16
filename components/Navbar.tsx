"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "./ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, siteConfig } from "@/lib/data";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const sections = ["#hero", ...navLinks.map((l) => l.href)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-ink/80 py-3 shadow-lg shadow-ink/20 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <a
          href="#hero"
          data-cursor-hover
          className="group flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-paper transition-colors hover:text-cyan"
        >
          <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center">
            <span className="animate-ring-glow absolute -inset-1 rounded-full bg-gradient-to-br from-royal via-violet to-cyan opacity-60 blur-md" />
            <span className="animate-spin-slow absolute inset-0 rounded-full border border-cyan/30" />
            <span className="glass-strong relative flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-cyan/40 transition-transform duration-300 group-hover:scale-110">
              <span className="font-display text-[9px] font-bold leading-none text-gradient">
                Engr
              </span>
            </span>
          </span>
          {siteConfig.shortName} <span className="text-gradient">.</span>
        </a>

        <div className="hidden md:flex items-center gap-3">
          <div className="glass-strong flex items-center gap-1 rounded-full px-2 py-2">
            {navLinks.map((link) => {
              const active = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-cursor-hover
                  className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                    active ? "text-paper" : "text-paper-dim hover:text-paper"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-royal to-violet"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>
          <ThemeToggle />
        </div>

        <div className="hidden md:flex">
          <Button size="sm" onClick={scrollToContact}>
            Contact Me
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="glass rounded-full p-2 text-paper"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-strong mx-4 mt-3 overflow-hidden rounded-3xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 font-mono text-sm uppercase tracking-wide text-paper-dim transition-colors hover:text-cyan"
                >
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="mt-2 w-full" onClick={scrollToContact}>
                Contact Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;