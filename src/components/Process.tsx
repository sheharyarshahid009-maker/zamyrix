"use client";

import { motion } from "framer-motion";
import { MessagesSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    number: "01",
    title: "Discover",
    text: "We start with a free consultation — your idea, your goals and exactly what your business needs. No jargon, straight talk.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    text: "You see a premium design of your product before we build it — colours, layout and flow, approved by you first.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop",
    text: "We build with modern technology and keep you updated with live demos — you watch your product grow, step by step.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy & Support",
    text: "We launch your product live, train you to use it, and stay available for support and upgrades after delivery.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
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
            How We Work
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            <span className="silver-text">From Idea To </span>
            <span className="blue-text">Launch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A clear, honest process — you always know what stage your project
            is at, and what happens next.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:border-blue-500/40"
            >
              <span className="pointer-events-none absolute -top-3 right-4 text-7xl font-black text-white/[0.05] transition group-hover:text-blue-500/10">
                {step.number}
              </span>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-600/30">
                <step.icon size={24} />
              </div>
              <h3 className="silver-text relative mt-5 text-xl font-bold">
                {step.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
