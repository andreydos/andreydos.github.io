"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  Users,
  Rocket,
  MessageSquare,
  Wrench,
  GraduationCap,
  Target,
  Scale,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Frontend Architecture",
    description:
      "Design frontend systems built for long-term maintainability — scalable structure, clear patterns, and minimal technical debt from day one.",
  },
  {
    icon: Users,
    title: "Engineering Leadership",
    description:
      "Lead engineering teams and own technical decisions — from architecture reviews to sprint planning, code standards, and hiring input.",
  },
  {
    icon: Rocket,
    title: "Product Delivery",
    description:
      "Take products from initial concept through to production, owning the technical side of the full delivery lifecycle end to end.",
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Collaboration",
    description:
      "Translate complex business requirements into technical specifications and communicate engineering constraints and trade-offs clearly.",
  },
  {
    icon: Wrench,
    title: "Developer Experience",
    description:
      "Improve engineering processes, tooling, and workflows so teams can move faster without sacrificing quality or reliability.",
  },
  {
    icon: GraduationCap,
    title: "Team Mentorship",
    description:
      "Support engineers at different levels — through code review, technical guidance, and helping people grow into their next role.",
  },
  {
    icon: Target,
    title: "Requirements Engineering",
    description:
      "Break down complex product requirements into well-scoped technical tasks with clear acceptance criteria and realistic estimates.",
  },
  {
    icon: Scale,
    title: "Engineering Judgment",
    description:
      "Balance technical quality with business timelines — making pragmatic decisions that serve both the product and the long-term codebase.",
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="services"
      className="py-28 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="section-label mb-4">What I Actually Do</p>
          <h2 id="services-heading" className="section-heading max-w-xl mb-4">
            Engineering beyond the pull request.
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            I help companies build software that stays manageable as it grows —
            technically and as an organization.
          </p>
        </motion.div>

        {/* Grid with 1px separator effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              className="p-6 bg-zinc-950 hover:bg-[#0d0d10] transition-colors duration-200 group"
            >
              <div className="mb-5">
                <div className="inline-flex p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] group-hover:border-white/[0.1] group-hover:bg-white/[0.05] transition-all duration-200">
                  <service.icon
                    size={17}
                    className="text-zinc-500 group-hover:text-zinc-400 transition-colors"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-zinc-300 mb-2.5 group-hover:text-zinc-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed group-hover:text-zinc-500 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
