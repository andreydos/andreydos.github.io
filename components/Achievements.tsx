"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const achievements = [
  {
    metric: "10+",
    label: "Years Commercial Experience",
    description:
      "Building production software continuously across startups, agencies, and enterprise-scale environments.",
  },
  {
    metric: "6",
    label: "Engineers Led",
    description:
      "Managed cross-functional teams from 2 to 6 developers, distributed and in-office, in multiple time zones.",
  },
  {
    metric: "3+",
    label: "Government Platforms",
    description:
      "Complex, compliance-sensitive systems serving thousands of citizens and civil servants in production.",
  },
  {
    metric: "2",
    label: "Platform Specializations",
    description:
      "Deep expertise across both React web and React Native mobile — delivering cohesive cross-platform products.",
  },
];

const highlights = [
  "Multiple SaaS products delivered from concept to production",
  "Experience with enterprise-scale codebases and teams",
  "Government technology and compliance-sensitive domains",
  "Full-cycle ownership from architecture through deployment",
  "International product delivery and remote collaboration",
  "Cross-functional work across engineering, design, and product",
];

export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 border-t border-white/[0.06] bg-white/[0.015]"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">Selected Achievements</p>
          <h2
            id="achievements-heading"
            className="section-heading max-w-2xl mb-4"
          >
            A decade of outcomes, not output.
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            Measured in products shipped, teams led, and systems that still run
            well.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
              className="card-base card-hover p-6 bg-zinc-950"
            >
              <div className="text-[2.75rem] font-bold text-zinc-100 mb-2 tracking-tight leading-none">
                {item.metric}
              </div>
              <div className="text-sm font-semibold text-zinc-400 mb-2.5">
                {item.label}
              </div>
              <div className="text-xs text-zinc-600 leading-relaxed">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 px-5 py-4 rounded-xl border border-white/[0.05] text-sm text-zinc-500"
            >
              <span
                aria-hidden="true"
                className="w-1 h-1 rounded-full bg-zinc-700 shrink-0 mt-2"
              />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
