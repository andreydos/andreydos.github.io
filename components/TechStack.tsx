"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES2022+)",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Expo Router",
      "Native Modules",
      "Push Notifications",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker",
      "Nginx",
      "AWS (S3, EC2)",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Vercel",
    ],
  },
];

export function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="skills"
      className="py-28 md:py-36 border-t border-white/[0.06]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">Technical Expertise</p>
          <h2 id="skills-heading" className="section-heading max-w-2xl mb-4">
            The tools I build with.
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            Depth in frontend and mobile, with the backend and infrastructure
            knowledge to own a product end to end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09, ease: "easeOut" }}
            >
              <p className="section-label mb-5">{cat.category}</p>
              <ul className="space-y-2.5" role="list">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-zinc-400"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1 h-1 rounded-full bg-zinc-700 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
