import { RevealOnScroll } from "./RevealOnScroll";
import { experiences } from "@/lib/data";

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/4 h-[220px] w-[220px] rounded-full bg-emerald/10 blur-[100px] sm:h-[380px] sm:w-[380px] sm:blur-[130px]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-10 max-w-3xl sm:mb-16">
          <RevealOnScroll>
            <span className="eyebrow">Career Journey</span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="mb-4 mt-3 font-display text-3xl font-semibold sm:mb-6 sm:mt-4 sm:text-4xl md:text-5xl">
              Experience that <span className="text-gradient font-normal italic">speaks volumes</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-sm text-paper-dim sm:text-base">
              A timeline of my professional growth, from curious beginner to a full-stack
              engineer shipping production systems.
            </p>
          </RevealOnScroll>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-royal via-line to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.role} className="relative grid gap-6 md:grid-cols-2 md:gap-8">
                <div className="absolute left-0 top-1 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gradient-to-br from-royal to-cyan ring-4 ring-ink sm:h-3 sm:w-3 md:left-1/2">
                  {exp.current && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan opacity-70" />
                  )}
                </div>

                <RevealOnScroll
                  delay={0.05 * (idx + 1)}
                  className={`pl-6 sm:pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="card-premium p-5 sm:p-6">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-cyan sm:text-xs">
                      {exp.period}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold sm:text-xl">{exp.role}</h3>
                    <p className="text-sm text-paper-dim sm:text-base">{exp.company}</p>
                    <p className="mt-3 text-sm text-paper-dim sm:mt-4">{exp.description}</p>
                    <div
                      className={`mt-3 flex flex-wrap gap-2 sm:mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[10px] text-paper-dim sm:px-3 sm:text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;