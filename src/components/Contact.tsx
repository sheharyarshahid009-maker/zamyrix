"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923396030012";

const infoCards = [
  {
    icon: Phone,
    title: "Call / WhatsApp",
    value: "0339 6030012",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: MapPin,
    title: "Based In",
    value: "Karachi, Pakistan — working worldwide",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "We reply within 24 hours",
  },
];

const services = [
  "Machine Learning",
  "Deep Learning",
  "Custom Software",
  "Website",
  "AI Agent",
  "Something Else",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text =
      `Assalamualaikum Zamyrix! I want to discuss a project.\n\n` +
      `Name: ${name}\n` +
      `My contact: ${contact}\n` +
      `Service needed: ${service}\n` +
      `Details: ${message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-blue-500/60 focus:bg-white/[0.06]";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400";

  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
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
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
            <span className="silver-text">Let&apos;s Build Something </span>
            <span className="blue-text">Great</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Tell us about your project — the first consultation is completely
            free, with no obligation.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-5">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            {infoCards.map((card) => {
              const Wrapper = card.href ? "a" : "div";
              return (
                <Wrapper
                  key={card.title}
                  {...(card.href
                    ? { href: card.href, target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:border-blue-500/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-600/30">
                    <card.icon size={20} />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      {card.title}
                    </span>
                    <span className="mt-0.5 block font-semibold text-slate-100">
                      {card.value}
                    </span>
                  </span>
                </Wrapper>
              );
            })}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Assalamualaikum Zamyrix! I want to discuss a project."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-4 font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:from-emerald-500 hover:to-emerald-400"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form side */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-7 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="zc-name">
                  Your Name
                </label>
                <input
                  id="zc-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ahmed Raza"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="zc-contact">
                  Phone / Email
                </label>
                <input
                  id="zc-contact"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="03xx xxxxxxx"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className={labelClass} htmlFor="zc-service">
                Service You Need
              </label>
              <select
                id="zc-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={inputClass}
              >
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#0a0a14]">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label className={labelClass} htmlFor="zc-message">
                Project Details
              </label>
              <textarea
                id="zc-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your idea or requirement..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="glow-blue mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 font-semibold text-white transition hover:from-blue-500 hover:to-blue-400"
            >
              <Send size={18} />
              Send via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Submitting opens WhatsApp with your message ready — just press
              send there.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
