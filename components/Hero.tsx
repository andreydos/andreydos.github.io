"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Users, Smartphone } from "lucide-react";

const stats = [
  { icon: Calendar, label: "10+ Years Experience" },
  { icon: Smartphone, label: "React + React Native" },
  { icon: Users, label: "Team Lead Experience" },
  { icon: MapPin, label: "New Brunswick, Canada" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Radial gradient top glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.10),transparent)]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Fade-out mask at bottom of grid */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 md:pt-36"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-zinc-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Open to senior and lead engineering opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[82px] font-bold tracking-[-0.03em] leading-[1.04] text-zinc-50 max-w-4xl mb-7"
        >
          Building scalable web and mobile products that solve{" "}
          <span className="text-zinc-500">real business problems.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-[1.65] mb-12"
        >
          Senior Frontend & React Native Engineer with 10+ years of experience
          delivering production-grade applications, leading teams, and helping
          organizations build software that lasts.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3 mb-20"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-xl font-medium text-sm hover:bg-zinc-100 transition-all duration-150 active:scale-[0.98] group"
          >
            View Projects
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform duration-150"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.12] text-zinc-400 rounded-xl font-medium text-sm hover:border-white/[0.24] hover:text-zinc-200 transition-all duration-150 active:scale-[0.98]"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-x-8 gap-y-3"
        >
          {stats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-zinc-600"
            >
              <Icon size={14} className="text-zinc-700 shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
