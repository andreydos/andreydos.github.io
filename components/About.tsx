"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  { label: "Seniority", value: "Senior / Lead" },
  { label: "Focus", value: "Frontend + Mobile" },
  { label: "Experience", value: "10+ Years" },
  { label: "Location", value: "Canada" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="about"
      className="py-28 md:py-36 border-t border-white/[0.06]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 xl:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">About</p>
            <h2
              id="about-heading"
              className="section-heading max-w-sm leading-tight mb-10"
            >
              Engineering with ownership and intent.
            </h2>

            {/* Highlights list */}
            <div className="space-y-0 border border-white/[0.06] rounded-2xl overflow-hidden">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm text-zinc-600">{h.label}</span>
                  <span className="text-sm font-medium text-zinc-300">
                    {h.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5 text-[15px] text-zinc-400 leading-[1.75]"
          >
            <p>
              I started my career as a frontend engineer, drawn to the
              intersection of design precision and technical problem-solving.
              Over the past decade, that focus has broadened considerably — I
              now think as much about system architecture, team dynamics, and
              business outcomes as I do about component structure.
            </p>
            <p>
              What drives me is building software that works past the initial
              launch. I&apos;ve seen too many products accumulate debt that
              makes every new feature harder and every team member less
              productive. I approach projects with a long-term lens — because
              the decisions made early largely determine how maintainable a
              codebase will be two years later.
            </p>
            <p>
              Over the years I&apos;ve worked across government platforms,
              enterprise SaaS products, complex mobile applications, and
              mission-critical workflow systems. I&apos;ve led teams, owned
              architecture, shipped to production repeatedly, and helped
              organizations think more clearly about how they build software.
            </p>
            <p>
              I believe good engineering and good product thinking are the same
              discipline viewed from different angles. Every technical decision
              has a business consequence, and the best engineers understand both
              sides of that equation deeply.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
