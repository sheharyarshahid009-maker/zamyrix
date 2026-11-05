"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const stats = [
  { value: "15+", label: "Live Projects" },
  { value: "5", label: "Expert Services" },
  { value: "3", label: "Founders, One Vision" },
];

const marqueeItems = [
  "Machine Learning",
  "Deep Learning",
  "Custom Software",
  "Websites",
  "AI Agents",
  "Data Analytics",
  "Automation",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-36 sm:pt-40">
      {/* Background glows + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute right-[-100px] top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-[-80px] h-72 w-72 rounded-full bg-slate-400/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Floating logo */}
          <div className="animate-floaty">
            <Image
              src="/logo.png"
              alt="Zamyrix"
              width={190}
              height={190}
              priority
              className="glow-blue rounded-3xl"
            />
          </div>

          {/* Badge */}
          <span className="glass mt-9 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            <Sparkles size={14} />
            AI · Software · Web — All Under One Roof
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            <span className="silver-text">We Turn Ideas Into</span>
            <br />
            <span className="blue-text">Intelligent Products</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Zamyrix is a team of builders crafting{" "}
            <span className="font-medium text-slate-200">
              Machine Learning, Deep Learning, Software, Websites
            </span>{" "}
            and{" "}
            <span className="font-medium text-slate-200">AI Agents</span> —
            premium digital products that help businesses level up.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="glow-blue flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-semibold text-white transition hover:from-blue-500 hover:to-blue-400"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </a>
            <a
              href="#products"
              className="glass rounded-xl px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
            >
              See Our Work
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="glass mx-auto mt-14 flex max-w-xl items-center justify-around rounded-2xl px-2 py-5"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="silver-text text-2xl font-extrabold sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <div className="mt-12 flex justify-center text-slate-500">
          <ChevronDown className="animate-bounce" size={26} />
        </div>
      </div>

      {/* Scrolling services strip */}
      <div className="relative mt-10 overflow-hidden border-y border-white/5 bg-white/[0.02] py-4">
        <div className="animate-marquee flex w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-6 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-slate-500"
            >
              {item}
              <Sparkles size={14} className="text-blue-500" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
