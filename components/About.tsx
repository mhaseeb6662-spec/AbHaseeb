import { BiCode, BiRocket, BiUser } from "react-icons/bi";
import { BsLightbulb } from "react-icons/bs";
import { RevealOnScroll } from "./RevealOnScroll";
import { TiltCard } from "./TiltCard";
import { highlights, siteConfig } from "@/lib/data";

const iconMap = {
  code: BiCode,
  rocket: BiRocket,
  users: BiUser,
  lightbulb: BsLightbulb,
};

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-royal/10 blur-[140px]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8">
            <RevealOnScroll>
              <span className="eyebrow">About Me</span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Building the future,{" "}
                <span className="text-gradient font-normal italic">one component at a time</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="space-y-4 text-sm leading-relaxed text-paper-dim sm:text-base">
              <p>
                I am a passionate Full Stack Developer and Software Engineer with 1+ year of
                experience, specializing in the MERN stack. I focus on building scalable web
                applications, solving real-world problems, writing clean and maintainable code,
                and continuously exploring modern technologies.
              </p>
              <p>
                I specialize in Tailwind CSS, React.js, Firebase, and modern frontend development.
                I am also expanding my skills in the MERN stack, including backend development,
                REST APIs, databases, authentication, and server-side programming.
              </p>
              <p>
                When I code, I explore new technologies, experiment with frameworks, and
                continuously learn and improve. I enjoy problem-solving, building creative
                projects, and following best practices while staying updated with the latest
                trends in web development and software engineering.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className="card-premium relative p-5 sm:p-6">
                <span className="eyebrow mb-3 block">Mission</span>
                <p className="font-display text-base italic leading-relaxed text-paper sm:text-lg">
                  My mission is to become a top developer in Pakistan and grow toward
                  opportunities at leading global tech companies like Google. I aim to master the
                  MERN stack, solve real-world problems, and build innovative, high-quality web
                  applications that deliver great user experiences.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <RevealOnScroll delay={0.05}>
              <TiltCard maxTilt={5} className="group mx-auto w-full max-w-[240px] xs:max-w-xs sm:max-w-sm">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-royal/30 via-violet/20 to-cyan/20 blur-2xl" />
                  <div className="glass-strong relative overflow-hidden rounded-[1.75rem] p-2">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem]">
                      <img
                        src="/images/profile.jpg"
                        alt={siteConfig.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <p className="font-display text-sm font-semibold text-white sm:text-base">{siteConfig.name}</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-cyan sm:text-[10px]">
                        {siteConfig.role}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {highlights.map((item, idx) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <RevealOnScroll key={item.title} delay={0.05 * (idx + 1)}>
                  <TiltCard className="group h-full">
                    <div className="card-premium h-full p-4 sm:p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal/20 to-cyan/10 sm:mb-4 sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5 text-cyan sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="mb-1.5 text-sm font-semibold sm:mb-2 sm:text-lg">{item.title}</h3>
                      <p className="text-xs text-paper-dim sm:text-sm">{item.description}</p>
                    </div>
                  </TiltCard>
                </RevealOnScroll>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;