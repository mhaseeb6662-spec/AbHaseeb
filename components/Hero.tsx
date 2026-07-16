"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import { FaDownload, FaFacebook } from "react-icons/fa";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { Button } from "./ui/Button";
import { OutlineButton } from "./ui/OutlineButton";
import { AuroraBackground } from "./AuroraBackground";
import { skills, siteConfig } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const socials = [
  { icon: BsGithub, href: siteConfig.github, label: "GitHub" },
  { icon: LiaLinkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: BsWhatsapp, href: siteConfig.whatsapp, label: "WhatsApp" },
  { icon: FaFacebook, href: siteConfig.facebook, label: "Facebook" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28">
      <AuroraBackground />
      <div className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-[45vh] opacity-60" />

      {/* 3D ambient scene */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-80">
        <HeroScene />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-ink/10 via-ink/60 to-ink" />

      <div className="container relative z-10 mx-auto px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2">
          {/* Left column — text */}
          <div className="space-y-6 sm:space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow"
            >
              Available for work — {siteConfig.role}
            </motion.span>

            <div className="space-y-4 sm:space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-4xl font-semibold leading-[1.1] sm:text-5xl sm:leading-[1.05] md:text-6xl lg:text-7xl"
              >
                MERN <span className="text-gradient">Stack</span>
                <br />
                Developer
                <br />
                <span className="font-display font-normal italic text-paper-dim">Excellence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="max-w-lg text-sm leading-relaxed text-paper-dim sm:text-base"
              >
                {siteConfig.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full justify-center sm:w-auto"
              >
                Contact Me
              </Button>
              <a href={siteConfig.resumeUrl} download="Abhaseebcv.pdf" className="w-full sm:w-auto">
                <OutlineButton className="w-full justify-center sm:w-auto">
                  <FaDownload className="h-4 w-4" />
                  Download CV
                </OutlineButton>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-muted">Follow</span>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  data-cursor-hover
                  className="glass rounded-full p-2.5 text-paper-dim transition-all duration-300 hover:border-cyan/40 hover:text-cyan"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column — tech solar system */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[260px] xs:max-w-xs sm:max-w-sm md:max-w-md"
          >
            {/* Glow behind the system */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-royal/35 via-violet/25 to-cyan/20 blur-3xl animate-ring-glow" />
            <div className="absolute -inset-2 rounded-full border border-cyan/20 animate-spin-slow" />

            <div className="animate-float">
              <div className="glass-strong relative flex aspect-square w-full items-center justify-center overflow-visible rounded-full p-4 sm:p-6 md:p-8">
                {/* orbit guide rings */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15 sm:h-[190px] sm:w-[190px] md:h-[230px] md:w-[230px]" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[215px] w-[215px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/10 sm:h-[270px] sm:w-[270px] md:h-[330px] md:w-[330px]" />

                {/* central sun */}
                <div className="glass-strong relative z-20 flex h-16 w-16 items-center justify-center rounded-full sm:h-24 sm:w-24 md:h-28 md:w-28">
                  <span className="font-display text-lg font-semibold text-gradient sm:text-2xl">
                    {siteConfig.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* orbiting technologies */}
                {skills.map((skill, i) => {
                  const ring = i % 2;
                  const ringItems = skills.filter((_, idx) => idx % 2 === ring);
                  const posInRing = ringItems.indexOf(skill);
                  const radius = ring === 0 ? 115 : 165;
                  const mobileRadius = ring === 0 ? 75 : 108;
                  const duration = ring === 0 ? 22 : 34;
                  const angle = (360 / ringItems.length) * posInRing;
                  const spinName = ring === 0 ? "orbitCW" : "orbitCCW";
                  const counterSpinName = ring === 0 ? "orbitCCW" : "orbitCW";
                  const delay = `-${(angle / 360) * duration}s`;

                  return (
                    <div
                      key={skill}
                      className="absolute left-1/2 top-1/2 h-0 w-0"
                      style={{
                        animation: `${spinName} ${duration}s linear infinite`,
                        animationDelay: delay,
                      }}
                    >
                      <div
                        style={{
                          transform: `translateX(clamp(${mobileRadius}px, ${
                            ring === 0 ? "26vw" : "37vw"
                          }, ${radius}px))`,
                        }}
                      >
                        <div
                          className="glass whitespace-nowrap rounded-full px-2 py-1 font-mono text-[8px] text-paper-dim transition-colors hover:text-cyan sm:px-3 sm:py-1.5 sm:text-[10px] md:text-[11px]"
                          style={{
                            animation: `${counterSpinName} ${duration}s linear infinite`,
                            animationDelay: delay,
                          }}
                        >
                          {skill}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating status badge */}
              <div className="glass-strong absolute -bottom-2 -right-2 z-30 rounded-2xl px-3 py-2 sm:-bottom-4 sm:-right-4 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald sm:h-2.5 sm:w-2.5" />
                  <span className="font-mono text-[10px] sm:text-xs">Available For Work</span>
                </div>
              </div>

              {/* Floating experience badge */}
              <div
                className="glass-strong absolute -left-2 -top-2 z-30 rounded-2xl px-3 py-2 sm:-left-4 sm:-top-4 sm:px-4 sm:py-3"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="font-display text-lg font-semibold text-gradient sm:text-2xl">+2</div>
                <div className="font-mono text-[9px] uppercase tracking-wide text-muted sm:text-[10px]">
                  Years Exp.
                </div>
              </div>
            </div>

            <style jsx global>{`
              @keyframes orbitCW {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              @keyframes orbitCCW {
                from {
                  transform: rotate(360deg);
                }
                to {
                  transform: rotate(0deg);
                }
              }
            `}</style>
          </motion.div>
        </div>

        {/* Skills marquee */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="divider-dotted mb-6 sm:mb-8" />
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-widest text-muted sm:mb-6">
            Technologies I Work With
          </p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-transparent sm:w-24" />
            <div className="animate-marquee flex w-max">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-5 py-2 sm:px-8">
                  <span className="font-mono text-xs text-paper-dim/60 transition-colors hover:text-cyan sm:text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        data-cursor-hover
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper-dim transition-colors hover:text-cyan sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <BiChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;