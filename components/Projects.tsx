import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { DiGithub } from "react-icons/di";
import { HiLockClosed } from "react-icons/hi";
import { RevealOnScroll } from "./RevealOnScroll";
import { TiltCard } from "./TiltCard";
import { OutlineButton } from "./ui/OutlineButton";
import { projects, siteConfig } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[220px] w-[220px] rounded-full bg-violet/10 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[140px]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <RevealOnScroll className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <span className="eyebrow">Featured Work</span>
          <h2 className="mb-4 mt-3 font-display text-3xl font-semibold sm:mb-6 sm:mt-4 sm:text-4xl md:text-5xl">
            Projects that <span className="text-gradient font-normal italic">make an impact</span>
          </h2>
          <p className="text-sm text-paper-dim sm:text-base">
            This section showcases my recent projects, highlighting my skills, creativity,
            problem-solving abilities, and expertise in full-stack web development.
          </p>
        </RevealOnScroll>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, idx) => (
            <RevealOnScroll key={project.title} delay={0.05 * (idx + 1)}>
              <TiltCard maxTilt={5} className="group h-full">
                <div className="card-premium h-full overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-70" />

                    {project.confidential ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 active:opacity-100">
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
                            className="glass-strong rounded-full p-2.5 text-paper transition-all hover:text-cyan sm:p-3"
                          >
                            <BsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Source code of ${project.title}`}
                            data-cursor-hover
                            className="glass-strong rounded-full p-2.5 text-paper transition-all hover:text-cyan sm:p-3"
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
                    <p className="text-sm text-paper-dim">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-paper-dim transition-all hover:border-cyan/50 hover:text-cyan sm:px-3 sm:text-[11px]"
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