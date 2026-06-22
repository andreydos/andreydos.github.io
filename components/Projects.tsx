"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Car, Shield } from "lucide-react";

const projects = [
  {
    number: "01",
    Icon: Building2,
    category: "Government Technology",
    title: "Municipal Document Management Platform",
    description:
      "Large-scale SaaS solution used by municipalities and local governments to manage administrative workflows, documents, and inter-departmental operations at scale.",
    responsibilities: [
      "Designed and owned the full frontend architecture",
      "Built complex multi-step business workflow interfaces in React",
      "Developed cross-platform mobile application with React Native",
      "Implemented real-time collaborative document features",
      "Led frontend team technical reviews and code standards",
    ],
    impact: [
      "Eliminated manual document processing across municipalities",
      "Improved inter-departmental workflow efficiency",
      "Scaled to handle hundreds of concurrent government users",
    ],
    tags: ["React", "React Native", "TypeScript", "Real-time", "SaaS"],
  },
  {
    number: "02",
    Icon: Car,
    category: "Urban Mobility",
    title: "Parking Management Ecosystem",
    description:
      "Complete digital platform connecting parking operators, enforcement inspectors, and customers through a unified ecosystem of web portals and mobile applications.",
    responsibilities: [
      "Built the administration and reporting portal from scratch",
      "Developed inspector mobile app for field enforcement operations",
      "Integrated payment processing and transaction management",
      "Designed real-time operational dashboards and analytics",
      "Contributed to product strategy and technical roadmap decisions",
    ],
    impact: [
      "Streamlined end-to-end parking operations for operators",
      "Significantly improved inspector efficiency in the field",
      "Increased payment conversion and customer satisfaction",
    ],
    tags: ["React", "React Native", "Payments", "Dashboards", "Mobile"],
  },
  {
    number: "03",
    Icon: Shield,
    category: "Identity & Citizen Services",
    title: "Identity Verification & Citizen Services Platform",
    description:
      "Government-oriented digital services platform handling citizen authentication, identity verification, and secure access to public administrative services across multiple jurisdictions.",
    responsibilities: [
      "Implemented secure OAuth2 and SSO authentication flows",
      "Built identity verification and document upload interfaces",
      "Designed and integrated secure government service APIs",
      "Added full internationalization for multiple languages",
      "Owned and documented frontend architecture decisions",
    ],
    impact: [
      "Improved citizen digital onboarding experience significantly",
      "Delivered secure, compliance-ready digital identity workflows",
      "Enhanced accessibility for diverse and multilingual users",
    ],
    tags: ["React", "Auth", "i18n", "Security", "Accessibility"],
  },
];

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="projects"
      className="py-28 md:py-36 border-t border-white/[0.06]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">Featured Work</p>
          <h2 id="projects-heading" className="section-heading max-w-2xl mb-4">
            Projects with real business impact.
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            Selected work from the past decade — complex systems built to last.
          </p>
        </motion.div>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group relative p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.025] hover:border-white/[0.1] transition-all duration-300"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left column */}
                <div className="lg:w-[42%]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs text-zinc-700 font-mono tracking-wider">
                      {project.number}
                    </span>
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/[0.07] bg-white/[0.03]">
                      <project.Icon
                        size={11}
                        className="text-zinc-600"
                        aria-hidden="true"
                      />
                      <span className="text-xs text-zinc-600">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-4 leading-snug tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-[1.7] mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg border border-white/[0.07] text-zinc-600 bg-white/[0.02]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right column */}
                <div className="lg:w-[58%] grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="section-label mb-4">What I Built</p>
                    <ul className="space-y-3" role="list">
                      {project.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex gap-3 text-sm text-zinc-500 leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="text-zinc-700 mt-[3px] shrink-0 select-none"
                          >
                            —
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="section-label mb-4">Business Impact</p>
                    <ul className="space-y-3" role="list">
                      {project.impact.map((imp) => (
                        <li
                          key={imp}
                          className="flex gap-3 text-sm text-zinc-500 leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="text-emerald-700/80 mt-[3px] shrink-0 select-none font-medium"
                          >
                            ↑
                          </span>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
