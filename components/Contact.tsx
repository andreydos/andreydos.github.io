"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

// Email is assembled client-side only — never present in static HTML.
// Crawlers parsing the HTML output won't find it; it only exists after
// JavaScript hydration.
function useEmail() {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    // Split across multiple variables so the string never exists as a literal
    const name = ["an", "drii", "dot", "sia"].join("");
    const host = ["gm", "ail", ".", "com"].join("");
    setAddress(`${name}@${host}`);
  }, []);

  return address;
}

const staticLinks = [
  {
    Icon: Github,
    label: "GitHub",
    value: "@andreydos",
    href: "https://github.com/andreydos",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "Andrii Dotsia",
    href: "https://linkedin.com/in/andriidotsia",
  },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const email = useEmail();

  return (
    <section
      ref={ref}
      id="contact"
      className="py-28 md:py-36 border-t border-white/[0.06]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 xl:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">Contact</p>
            <h2
              id="contact-heading"
              className="section-heading max-w-sm mb-6 leading-tight"
            >
              Let&apos;s build something together.
            </h2>
            <p className="text-[15px] text-zinc-400 leading-[1.75] mb-6">
              I&apos;m open to senior individual contributor and lead
              engineering roles. If you&apos;re building something meaningful
              and need someone who can own the technical side — I&apos;d like
              to hear about it.
            </p>
            <p className="text-[15px] text-zinc-500 leading-[1.75]">
              I work best in environments that value technical quality,
              cross-functional collaboration, and long-term thinking over
              short-term velocity.
            </p>
          </motion.div>

          {/* Right: links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3"
          >
            {/* Static links: GitHub + LinkedIn */}
            {staticLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="group flex items-center justify-between p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.14] hover:bg-white/[0.03] transition-all duration-200 active:scale-[0.99]"
                aria-label={`${link.label}: ${link.value}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] group-hover:border-white/[0.1] group-hover:bg-white/[0.05] transition-all duration-200">
                    <link.Icon
                      size={16}
                      className="text-zinc-500 group-hover:text-zinc-400 transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-600 mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">
                      {link.value}
                    </div>
                  </div>
                </div>
                <ArrowRight
                  size={15}
                  className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all duration-200"
                  aria-hidden="true"
                />
              </motion.a>
            ))}

            {/* Email: rendered only after JS hydration, never in static HTML */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.36 }}
            >
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center justify-between p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.14] hover:bg-white/[0.03] transition-all duration-200 active:scale-[0.99]"
                  aria-label={`Email: ${email}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] group-hover:border-white/[0.1] group-hover:bg-white/[0.05] transition-all duration-200">
                      <Mail
                        size={16}
                        className="text-zinc-500 group-hover:text-zinc-400 transition-colors"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-600 mb-0.5">Email</div>
                      <div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">
                        {email}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all duration-200"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                // Placeholder skeleton shown while JS hasn't hydrated yet
                <div className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.01]">
                  <div className="p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03]">
                    <Mail size={16} className="text-zinc-700" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-8 rounded bg-zinc-800" />
                    <div className="h-3 w-36 rounded bg-zinc-800/60" />
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
