"use client";

import { useState } from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { DiGithub } from "react-icons/di";
import { HiLockClosed } from "react-icons/hi";
import { BiCube, BiLayer, BiMobileAlt, BiGridAlt } from "react-icons/bi";
import { RevealOnScroll } from "./RevealOnScroll";
import { TiltCard } from "./TiltCard";
import { OutlineButton } from "./ui/OutlineButton";
import { projects, siteConfig, Project } from "@/lib/data";

type CategoryFilter = "all" | "3d" | "fullstack" | "mobile";

const categories: { id: CategoryFilter; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All Projects", icon: BiGridAlt },
  { id: "3d", label: "3D & Interactive", icon: BiCube },
  { id: "fullstack", label: "Full Stack & SaaS", icon: BiLayer },
  { id: "mobile", label: "Mobile & Apps", icon: BiMobileAlt },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[220px] w-[220px] rounded-full bg-violet/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[300px] w-[300px] rounded-full bg-cyan/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <RevealOnScroll className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <span className="eyebrow">Featured Work</span>
          <h2 className="mb-4 mt-3 font-display text-3xl font-semibold sm:mb-6 sm:mt-4 sm:text-4xl md:text-5xl">
            Projects that <span className="text-gradient font-normal italic">make an impact</span>
          </h2>
          <p className="text-sm text-paper-dim sm:text-base">
            Explore my featured 3D interactive web experiences, full-stack enterprise platforms,
            and mobile applications built with modern creative technologies.
          </p>
        </RevealOnScroll>

        {/* Category Filter Tabs */}
        <RevealOnScroll delay={0.1} className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:mb-12 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count =
              cat.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
                  isActive
                    ? "bg-gradient-to-r from-royal via-cyan to-violet text-ink font-semibold shadow-lg shadow-cyan/25 scale-105"
                    : "glass border border-line/60 text-paper-dim hover:border-cyan/40 hover:text-paper"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                    isActive ? "text-ink" : cat.id === "3d" ? "text-cyan" : "text-paper-dim"
                  }`}
                />
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono leading-none ${
                    isActive ? "bg-ink/20 text-ink" : "bg-surface-elevated text-paper-dim"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
          {filteredProjects.map((project, idx) => (
            <RevealOnScroll key={project.title} delay={0.04 * (idx % 8 + 1)}>
              <TiltCard maxTilt={project.is3D ? 8 : 5} className="group h-full">
                <div
                  className={`card-premium relative h-full overflow-hidden transition-all duration-300 ${
                    project.is3D
                      ? "border-cyan/30 hover:border-cyan/70 hover:shadow-2xl hover:shadow-cyan/15"
                      : ""
                  }`}
                >
                  {/* Subtle 3D Top Accent Glow */}
                  {project.is3D && (
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-80" />
                  )}

                  <div className="relative aspect-video overflow-hidden bg-surface-elevated">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-75" />

                    {/* 3D Experience Badge */}
                    {project.badge && (
                      <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-cyan/40 bg-ink/85 px-3 py-1 text-[11px] font-medium text-cyan shadow-lg shadow-cyan/20 backdrop-blur-md">
                        <BiCube className="h-3.5 w-3.5 text-cyan animate-pulse" />
                        <span>{project.badge}</span>
                      </div>
                    )}

                    {project.confidential ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/75 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 active:opacity-100">
                        <HiLockClosed className="h-5 w-5 text-cyan sm:h-6 sm:w-6" />
                        <span className="text-center font-mono text-[10px] uppercase tracking-wide text-paper-dim sm:text-xs">
                          Private Company Project
                        </span>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:opacity-100 sm:gap-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Live demo of ${project.title}`}
                            data-cursor-hover
                            className="glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-paper shadow-xl transition-all hover:bg-cyan hover:text-ink hover:scale-105"
                          >
                            <span>{project.is3D ? "Explore 3D Site" : "Live Demo"}</span>
                            <BsArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Source code of ${project.title}`}
                            data-cursor-hover
                            className="glass-strong rounded-full p-2.5 text-paper transition-all hover:text-cyan hover:scale-105 sm:p-3"
                          >
                            <DiGithub className="h-4 w-4 sm:h-5 sm:w-5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 p-5 sm:space-y-4 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold transition-colors group-hover:text-cyan sm:text-xl">
                        {project.title}
                      </h3>

                      {project.confidential || (!project.link && !project.github) ? (
                        <BsArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted" />
                      ) : (
                        <a
                          href={project.link || project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title}`}
                          data-cursor-hover
                        >
                          <BsArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-paper-dim">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2.5 py-1 font-mono text-[10px] transition-all sm:px-3 sm:text-[11px] ${
                            tag.includes("3D") || tag.includes("WebGL") || tag.includes("Three.js") || tag.includes("GSAP")
                              ? "border-cyan/40 bg-cyan/5 text-cyan hover:border-cyan hover:bg-cyan/15"
                              : "border-line text-paper-dim hover:border-cyan/50 hover:text-cyan"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.confidential && (
                      <p className="font-mono text-[10px] uppercase tracking-wide text-muted sm:text-[11px]">
                        Demo unavailable due to company confidentiality
                      </p>
                    )}
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3} className="mt-10 text-center sm:mt-12">
          <OutlineButton href={siteConfig.github} className="inline-flex">
            View All Projects on GitHub
            <BsArrowUpRight className="h-4 w-4" />
          </OutlineButton>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35} className="mt-10 sm:mt-16">
          <div className="card-premium flex flex-col items-center gap-4 px-5 py-6 text-center sm:flex-row sm:px-8 sm:text-left">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal/20 to-cyan/10">
              <HiLockClosed className="h-5 w-5 text-cyan" />
            </div>
            <div>
              <h4 className="mb-1 text-sm font-semibold">Some Projects Are Confidential</h4>
              <p className="text-sm text-paper-dim">
                Several full-stack projects I&apos;ve built for companies cannot be publicly
                shared due to NDAs and client confidentiality agreements. These involve
                enterprise-level systems, internal tools, and proprietary business logic.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Projects;
