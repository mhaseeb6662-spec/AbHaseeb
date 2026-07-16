import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { siteConfig, navLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-line py-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/10 blur-[120px]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#hero" className="group flex items-center gap-2.5 font-display text-lg font-semibold text-paper">
            <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center">
              <span className="animate-ring-glow absolute -inset-1 rounded-full bg-gradient-to-br from-royal via-violet to-cyan opacity-60 blur-md" />
              <span className="animate-spin-slow absolute inset-0 rounded-full border border-cyan/30" />
              <span className="glass-strong relative flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-cyan/40 transition-transform duration-300 group-hover:scale-110">
                <span className="font-display text-[8px] font-bold leading-none text-gradient">
                  Engr
                </span>
              </span>
            </span>
            {siteConfig.shortName} <span className="text-gradient">.</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wide text-paper-dim transition-colors hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-cursor-hover
              className="glass rounded-full p-2 text-paper-dim transition-colors hover:text-cyan"
            >
              <BsGithub className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              data-cursor-hover
              className="glass rounded-full p-2 text-paper-dim transition-colors hover:text-cyan"
            >
              <BsWhatsapp className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              data-cursor-hover
              className="glass rounded-full p-2 text-paper-dim transition-colors hover:text-cyan"
            >
              <FaFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="divider-dotted my-8" />

        <p className="text-center font-mono text-[11px] uppercase tracking-wide text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;