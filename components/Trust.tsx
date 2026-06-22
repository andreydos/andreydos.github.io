"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const credentials = [
  "10+ years building production software",
  "Led teams of 2–6 developers",
  "Web and mobile expertise",
  "Government and enterprise SaaS platforms",
  "End-to-end product ownership",
  "International remote collaboration",
];

export function Trust() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-12 border-y border-white/[0.06] bg-white/[0.01]"
      aria-label="Credentials"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {credentials.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: "easeOut",
              }}
              className="flex items-center gap-3 text-sm text-zinc-500"
            >
              <span
                aria-hidden="true"
                className="w-1 h-1 rounded-full bg-zinc-700 shrink-0"
              />
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
