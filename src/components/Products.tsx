"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const categories = [
  "All",
  "Custom Software",
  "Websites",
  "Machine Learning",
  "Deep Learning",
  "AI Agents",
];

const products = [
  {
    name: "BillScope",
    category: "Custom Software",
    desc: "RA billing system for construction projects — old/new rate splits with Excel-exact totals.",
    url: "https://billscope.vercel.app",
    featured: true,
  },
  {
    name: "School ERP",
    category: "Custom Software",
    desc: "Complete school management — admissions, fees, attendance, exams and report cards.",
    url: "https://school-erp-liard.vercel.app",
    featured: false,
  },
  {
    name: "ClinicScope",
    category: "Custom Software",
    desc: "Clinic management — patients, doctors, appointments, prescriptions and billing.",
    url: "https://clinic-scope-livid.vercel.app",
    featured: false,
  },
  {
    name: "Tuition Academy",
    category: "Custom Software",
    desc: "Tuition management with fees, attendance, homework and a parent portal.",
    url: "https://tuition-academy-3499.vercel.app",
    featured: false,
  },
  {
    name: "Shery Sasta Store",
    category: "Websites",
    desc: "Full e-commerce store with cart, coupons, order tracking and an admin dashboard.",
    url: "https://shery-sasta-store.vercel.app",
    featured: false,
  },
  {
    name: "Shery Cafe",
    category: "Websites",
    desc: "Premium restaurant website with online ordering and a complete admin panel.",
    url: "https://shery-cafe.vercel.app",
    featured: false,
  },
  {
    name: "DocuMind AI",
    category: "Machine Learning",
    desc: "Chat with your documents — RAG-powered question answering over PDF files.",
    url: "https://documind-ai-yuuf443aifz9y8nhtsppzz.streamlit.app",
    featured: false,
  },
  {
    name: "ChurnScope AI",
    category: "Machine Learning",
    desc: "Customer churn prediction that flags at-risk customers before they leave.",
    url: "https://churn-prediction-ai-htcto2txzxvlqyj4owf8aw.streamlit.app",
    featured: false,
  },
  {
    name: "YOLO Vision AI",
    category: "Deep Learning",
    desc: "Real-time object detection — upload an image and watch the model find everything in it.",
    url: "https://44jtbcb9zsvvrucb94utyi.streamlit.app/",
    featured: false,
  },
  {
    name: "Face Mask Detection",
    category: "Deep Learning",
    desc: "A CNN model that detects whether a person is wearing a face mask, from a photo.",
    url: "https://face-mask-detection-iumysnykxrf6auqnvn2xxt.streamlit.app/",
    featured: false,
  },
  {
    name: "HireScope AI",
    category: "AI Agents",
    desc: "AI resume screener that scores, ranks and shortlists candidates against any job.",
    url: "https://hirescope-ai-kctjt8j44gbytjt5t2gdev.streamlit.app/",
    featured: false,
  },
  {
    name: "Shery AI",
    category: "AI Agents",
    desc: "A smart AI chatbot with a premium interface — answers questions in seconds.",
    url: "https://shery-ai-k2xsgbzfzsnswuzyhzso7v.streamlit.app/",
    featured: false,
  },
];

export default function Products() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section id="products" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
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
            Our Work
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            <span className="silver-text">Products That </span>
            <span className="blue-text">Speak For Us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Real products, live on the internet — not demos, not promises.
            Click any card and try them yourself.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? "glow-blue rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white"
                  : "glass rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, i) => (
            <motion.a
              key={`${active}-${product.name}`}
              href={product.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass group flex flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                  {product.category}
                </span>
                {product.featured && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-blue-300">
                    <Star size={13} className="fill-blue-400 text-blue-400" />
                    Featured
                  </span>
                )}
              </div>
              <h3 className="silver-text mt-4 text-lg font-bold">
                {product.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {product.desc}
              </p>
              <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                Visit Live
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
