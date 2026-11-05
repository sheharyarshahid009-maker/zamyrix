"use client";

import { motion } from "framer-motion";

const members = [
  {
    initials: "SK",
    name: "Engr. Muhammad Sheharyar Khan",
    role: "Founder & Lead Engineer",
    focus: "Full-Stack Development · Machine Learning · AI Products",
    founder: true,
  },
  {
    initials: "ME",
    name: "Engr. Marium Ehtesham",
    role: "Co-Founder",
    focus: "Engineering · Innovation · Product Development",
    founder: false,
  },
  {
    initials: "ZS",
    name: "Engr. Muhammad Zulqarnain Shoaib",
    role: "Co-Founder",
    focus: "Engineering · Technology · Product Development",
    founder: false,
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            The Team
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            <span className="silver-text">The Minds Behind </span>
            <span className="blue-text">Zamyrix</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Three engineers, one standard — premium. When you work with
            Zamyrix, you work directly with the people who build your product.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.18 }}
              className={
                member.founder
                  ? "rounded-3xl bg-gradient-to-b from-blue-500/70 via-blue-500/15 to-transparent p-[1.5px] shadow-2xl shadow-blue-900/30"
                  : "rounded-3xl bg-white/[0.04] p-[1.5px]"
              }
            >
              <div className="group flex h-full flex-col items-center rounded-[calc(1.5rem-1.5px)] bg-[#07070d] px-6 py-9 text-center transition duration-300 hover:bg-[#0a0a14]">
                {/* Monogram */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 14,
                    delay: i * 0.18 + 0.15,
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-xl transition group-hover:bg-blue-500/50" />
                  <div className="glass relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-blue-500/40">
                    <span className="silver-text text-3xl font-black">
                      {member.initials}
                    </span>
                  </div>
                </motion.div>

                <h3 className="silver-text mt-6 text-lg font-bold leading-snug">
                  {member.name}
                </h3>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-400">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {member.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center text-sm uppercase tracking-[0.3em] text-slate-500"
        >
          Three Engineers · One Vision · Zero Compromise
        </motion.p>
      </div>
    </section>
  );
}
