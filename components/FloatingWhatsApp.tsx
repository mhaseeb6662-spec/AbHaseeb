"use client";

import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { siteConfig } from "@/lib/data";

export const FloatingWhatsApp = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-[85] flex items-center gap-3 sm:bottom-8 sm:right-8"
    >
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Abdul Haseeb on WhatsApp"
        data-cursor-hover
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/35 transition-all duration-300 hover:scale-110 hover:bg-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/50 sm:h-14 sm:w-14"
      >
        {/* Pulsing radar waves */}
        <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full bg-emerald-500/40 opacity-75" />
        <span className="pointer-events-none absolute -inset-2 animate-pulse rounded-full border border-emerald-400/30" />

        {/* Online green indicator dot */}
        <span className="absolute right-1 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ink">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
        </span>

        <BsWhatsapp className="relative z-10 h-6 w-6 text-white transition-transform group-hover:scale-110 sm:h-7 sm:w-7" />

        {/* Tooltip on hover */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-emerald-500/30 bg-ink/90 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-400 shadow-xl backdrop-blur-md transition-all group-hover:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </motion.aside>
  );
};

export default FloatingWhatsApp;
