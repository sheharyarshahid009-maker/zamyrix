"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Network,
  Code2,
  Globe,
  Bot,
  Check,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    desc: "Models that learn from your data and predict what happens next — so you decide before your competitors do.",
    features: [
      "Customer churn & sales prediction",
      "Data analysis & smart dashboards",
      "Recommendation systems",
    ],
    proof: [
      {
        name: "ChurnScope AI",
        url: "https://churn-prediction-ai-htcto2txzxvlqyj4owf8aw.streamlit.app/",
      },
      {
        name: "DocuMind AI",
        url: "https://documind-ai-yuuf443aifz9y8nhtsppzz.streamlit.app",
      },
    ],
  },
  {
    icon: Network,
    title: "Deep Learning",
    desc: "Neural networks that can see and understand — image, video and pattern recognition built for real-world use.",
    features: [
      "Object detection (YOLO)",
      "Face & image recognition",
      "Custom CNN models",
    ],
    proof: [
      {
        name: "Face Mask Detection",
        url: "https://face-mask-detection-iumysnykxrf6auqnvn2xxt.streamlit.app/",
      },
      {
        name: "YOLO Vision AI",
        url: "https://44jtbcb9zsvvrucb94utyi.streamlit.app/",
      },
    ],
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Complete management systems built exactly around your business process — no Excel chaos, no manual errors.",
    features: [
      "ERP, billing & clinic systems",
      "School & business management",
      "Admin dashboards & reports",
    ],
    proof: [
      { name: "BillScope", url: "https://billscope.vercel.app" },
      { name: "School ERP", url: "https://school-erp-liard.vercel.app" },
      { name: "ClinicScope", url: "https://clinic-scope-livid.vercel.app" },
    ],
  },
  {
    icon: Globe,
    title: "Websites",
    desc: "Premium, fast and modern websites that make your brand look world-class on every screen.",
    features: [
      "Business & portfolio websites",
      "E-commerce stores",
      "Landing pages that convert",
    ],
    proof: [
      { name: "Shery Cafe", url: "https://shery-cafe.vercel.app" },
      { name: "Shery Sasta Store", url: "https://shery-sasta-store.vercel.app" },
    ],
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Smart assistants that answer customers, search your documents and automate routine work — 24/7, without breaks.",
    features: [
      "AI chatbots for your business",
      "Document Q&A (RAG) systems",
      "Workflow automation agents",
    ],
    proof: [
      {
        name: "HireScope AI",
        url: "https://hirescope-ai-kctjt8j44gbytjt5t2gdev.streamlit.app/",
      },
      {
        name: "Shery AI",
        url: "https://shery-ai-k2xsgbzfzsnswuzyhzso7v.streamlit.app/",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
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
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            <span className="silver-text">Services That </span>
            <span className="blue-text">Level You Up</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Five crafts, one standard — premium. Every service below is backed
            by real, live products we have already built and shipped.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              className="glass group flex flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-3 text-white shadow-lg shadow-blue-600/30">
                <service.icon size={26} />
              </div>
              <h3 className="silver-text mt-5 text-xl font-bold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {service.desc}
              </p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-white/5 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Live Proof
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {service.proof.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 transition hover:bg-blue-500/20 hover:text-blue-200"
                    >
                      {item.name}
                      <ArrowUpRight size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="group flex flex-col justify-center rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-900 p-7 shadow-xl shadow-blue-900/40 transition duration-300 hover:-translate-y-1.5"
          >
            <h3 className="text-2xl font-extrabold text-white">
              Have an Idea?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-blue-100">
              A product, a system, a website — if you can imagine it, we can
              build it. Tell us about your project and get a free consultation.
            </p>
            <span className="mt-5 flex items-center gap-2 font-semibold text-white">
              Start a Project
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
