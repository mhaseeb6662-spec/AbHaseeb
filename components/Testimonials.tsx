"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const previous = () =>
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[activeIdx];

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <RevealOnScroll className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <span className="eyebrow">What People Say</span>
          <h2 className="mb-4 mt-3 font-display text-3xl font-semibold sm:mb-6 sm:mt-4 sm:text-4xl md:text-5xl">
            Kind words from <span className="text-gradient font-normal italic">amazing people</span>
          </h2>
        </RevealOnScroll>

        <div className="mx-auto max-w-4xl">
          <div className="card-premium relative p-6 pt-10 sm:p-8 sm:pt-12 md:p-12">
            <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-royal to-violet sm:left-8 sm:h-12 sm:w-12">
              <FaQuoteLeft className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="mb-6 pt-2 font-display text-lg italic leading-relaxed sm:mb-8 sm:pt-4 sm:text-xl md:text-2xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={active.avatar}
                    alt={active.author}
                    width={56}
                    height={56}
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-cyan/30 sm:h-14 sm:w-14"
                  />
                  <div>
                    <div className="text-sm font-semibold sm:text-base">{active.author}</div>
                    <div className="text-xs text-paper-dim sm:text-sm">{active.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <button
              onClick={previous}
              aria-label="Previous testimonial"
              data-cursor-hover
              className="glass flex-shrink-0 rounded-full p-2.5 text-paper-dim transition-all hover:text-cyan sm:p-3"
            >
              <BiChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.author}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Show testimonial from ${t.author}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx ? "w-6 bg-gradient-to-r from-royal to-cyan sm:w-8" : "w-2 bg-line hover:bg-paper-dim/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              data-cursor-hover
              className="glass flex-shrink-0 rounded-full p-2.5 text-paper-dim transition-all hover:text-cyan sm:p-3"
            >
              <BiChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;