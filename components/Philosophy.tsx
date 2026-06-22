"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    title: "Build for maintainability",
    description:
      "Code that can't be understood by the next engineer is code that creates business risk. Clarity and consistency matter more than cleverness.",
  },
  {
    title: "Own outcomes, not tasks",
    description:
      "I care about whether the product succeeds, not just whether the tickets are closed. Engineering is a means to an end — the end is business value.",
  },
  {
    title: "Control complexity deliberately",
    description:
      "Every abstraction and dependency has a cost that compounds over time. Add complexity only when the problem genuinely demands it.",
  },
  {
    title: "Design for the user first",
    description:
      "Technical decisions should serve the people using the product. Performance, accessibility, and reliability are not negotiable afterthoughts.",
  },
  {
    title: "Clarity over cleverness",
    description:
      "Simple solutions that the whole team understands outperform clever solutions that only the author can debug or modify safely.",
  },
  {
    title: "Balance speed and quality",
    description:
      "Moving fast with good judgment is not a contradiction. The goal is shipping software you can be proud of — and iterating on indefinitely.",
  },
];

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 border-t border-white/[0.06] bg-white/[0.015]"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">Work Philosophy</p>
          <h2
            id="philosophy-heading"
            className="section-heading max-w-2xl mb-4"
          >
            How I think about engineering.
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            Principles I&apos;ve developed through a decade of building,
            leading, and shipping real products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              className="p-6 rounded-2xl border border-white/[0.06] hover:border-white/[0.1] bg-zinc-950 hover:bg-[#0d0d10] transition-all duration-200"
            >
              <h3 className="text-sm font-semibold text-zinc-200 mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
