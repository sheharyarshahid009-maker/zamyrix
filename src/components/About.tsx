"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Target, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Intelligence",
    text: "Data-driven products powered by machine learning and AI — systems that think, predict and learn.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Modern stacks, premium design and fresh thinking in every build — nothing outdated, nothing ordinary.",
  },
  {
    icon: Target,
    title: "Impact",
    text: "We measure success by your results: more sales, less manual work, happier customers.",
  },
];

const points = [
  "End-to-end development — idea to launch",
  "Premium, modern design on every project",
  "Direct communication with the builders",
  "Support even after delivery",
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              About Zamyrix
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
              <span className="silver-text">Three Builders.</span>
              <br />
              <span className="blue-text">One Vision.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              Zamyrix is a software and AI studio started by three friends with
              one shared obsession — building digital products that look
              premium and work brilliantly. From intelligent machine-learning
              models to complete business software, we turn ambitious ideas
              into real, live products.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Every project is crafted end-to-end by our own team — design,
              development, AI and launch — so you always know exactly who is
              building your product.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-blue-500"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Logo card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-8 text-center"
          >
            <div className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[80px]" />
            <Image
              src="/logo.png"
              alt="Zamyrix"
              width={220}
              height={220}
              className="relative mx-auto rounded-2xl"
            />
            <p className="relative mt-6 text-xs uppercase tracking-[0.32em] text-slate-400">
              Intelligence · Innovation · Impact
            </p>
            <div className="relative mt-6 flex justify-center gap-8 border-t border-white/5 pt-6 sm:gap-12">
              <div>
                <p className="silver-text text-xl font-extrabold">2026</p>
                <p className="mt-0.5 text-xs text-slate-500">Founded</p>
              </div>
              <div>
                <p className="silver-text text-xl font-extrabold">Karachi</p>
                <p className="mt-0.5 text-xs text-slate-500">Based in Pakistan</p>
              </div>
              <div>
                <p className="silver-text text-xl font-extrabold">Global</p>
                <p className="mt-0.5 text-xs text-slate-500">Working Worldwide</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass group rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-600/30">
                <pillar.icon size={24} />
              </div>
              <h3 className="silver-text mt-5 text-xl font-bold">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
