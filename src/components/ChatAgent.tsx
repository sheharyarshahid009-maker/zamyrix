"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Send, X } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const GREETING: Msg = {
  from: "bot",
  text: "Assalamualaikum! I am the Zamyrix AI assistant. Ask me about our services, products, pricing or team — or tap a question below.",
};

const QUICK_QUESTIONS = [
  "What services do you offer?",
  "Show me your products",
  "What does a project cost?",
  "Who is the team?",
  "How do I contact you?",
];

function getReply(raw: string): string {
  const t = raw.toLowerCase();

  if (/(price|pricing|cost|rate|charges|quote|fees|budget)/.test(t)) {
    return "Pricing depends on the scope of your project — features, pages and complexity. Our rates are very competitive and the first consultation is 100% free. Share your idea on WhatsApp (0339 6030012) and we will give you an exact quote within 24 hours.";
  }
  if (/(contact|phone|whatsapp|number|call|email|reach)/.test(t)) {
    return "You can reach Zamyrix on Call / WhatsApp: 0339 6030012. We usually reply within 24 hours. You can also fill the Contact form on this page — your message lands directly on our WhatsApp.";
  }
  if (/(team|founder|who are|members|owners|ceo)/.test(t)) {
    return "Zamyrix is founded by three engineers: Engr. Muhammad Sheharyar Khan (Founder & Lead Engineer), Engr. Marium Ehtesham (Co-Founder) and Engr. Muhammad Zulqarnain Shoaib (Co-Founder). You can meet them in the Team section above.";
  }
  if (/(location|located|address|karachi|where|city|country)/.test(t)) {
    return "We are based in Karachi, Pakistan — and we work with clients worldwide. Everything is handled smoothly online, from consultation to delivery.";
  }
  if (/(product|portfolio|projects|built|your work|apps)/.test(t)) {
    return "We have 15+ live products, including BillScope (construction billing), School ERP, ClinicScope, Tuition Academy, Shery Sasta Store and AI apps like DocuMind AI and HireScope AI. Scroll to the Products section and click any card to try them live!";
  }
  if (/(machine learning|\bml\b|prediction|churn|data)/.test(t)) {
    return "Our Machine Learning service covers customer churn & sales prediction, data analysis dashboards and recommendation systems. Live examples: ChurnScope AI and DocuMind AI — find them in the Products section.";
  }
  if (/(deep learning|\bdl\b|yolo|detection|vision|image)/.test(t)) {
    return "Our Deep Learning service covers object detection (YOLO), face & image recognition and custom CNN models. Live examples: YOLO Vision AI and Face Mask Detection — try them in the Products section.";
  }
  if (/(software|erp|system|management|billing|clinic|school)/.test(t)) {
    return "We build complete custom software — ERP, billing, clinic, school and business management systems with premium dashboards and reports. Live examples: BillScope, School ERP and ClinicScope.";
  }
  if (/(website|web|ecommerce|e-commerce|store|shop|landing)/.test(t)) {
    return "We design premium, fast websites — business sites, portfolios, landing pages and full e-commerce stores. Live examples: Shery Cafe and Shery Sasta Store — see them in the Products section.";
  }
  if (/(agent|chatbot|bot|automation|rag|assistant)/.test(t)) {
    return "Our AI Agents service includes business chatbots like this one, document Q&A (RAG) systems and workflow automation agents that work 24/7. Live example: HireScope AI, our AI resume screener.";
  }
  if (/(service|offer|what do you do|what can)/.test(t)) {
    return "We offer 5 services: Machine Learning, Deep Learning, Custom Software, Websites and AI Agents. Ask me about any of them — or tap a product question to see live examples of our work.";
  }
  if (/(how long|timeline|duration|deliver|time|deadline)/.test(t)) {
    return "Timelines depend on scope — a landing page can take days, while a full management system takes a few weeks. Before starting, we give you a clear timeline and keep you updated with live demos at every step.";
  }
  if (/(start|order|hire|begin|get started)/.test(t)) {
    return "Starting is easy: tap the WhatsApp button on this page or fill the Contact form with your idea. We will set up a free consultation and guide you from there — no obligation.";
  }
  if (/(hello|hi|hey|salam|aoa|assalam)/.test(t) && t.length < 30) {
    return "Hello! Great to see you here. I can tell you about our services, products, pricing, team or how to start a project. What would you like to know?";
  }
  return "Good question! I can answer questions about our services, products, pricing, team and contact details. For anything detailed, our team replies fast on WhatsApp: 0339 6030012.";
}

export default function ChatAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  function send(text: string) {
    const clean = text.trim();
    if (!clean || typing) return;
    setMessages((prev) => [...prev, { from: "user", text: clean }]);
    setInput("");
    setTyping(true);
    const reply = getReply(clean);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setTyping(false);
    }, 900);
  }

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 z-50 flex h-[480px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#07070d]/95 shadow-2xl shadow-blue-950/50 backdrop-blur-xl sm:right-5"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.03] px-4 py-3.5">
              <Image
                src="/logo.png"
                alt="Zamyrix AI"
                width={38}
                height={38}
                className="rounded-full"
              />
              <div className="flex-1 leading-tight">
                <p className="text-sm font-bold text-slate-100">Zamyrix AI</p>
                <p className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online — replies instantly
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={
                    msg.from === "user" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      msg.from === "user"
                        ? "max-w-[82%] rounded-2xl rounded-br-md bg-gradient-to-r from-blue-600 to-blue-500 px-3.5 py-2.5 text-sm leading-relaxed text-white"
                        : "max-w-[82%] rounded-2xl rounded-bl-md border border-white/[0.07] bg-white/[0.05] px-3.5 py-2.5 text-sm leading-relaxed text-slate-200"
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/[0.07] bg-white/[0.05] px-3.5 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300 transition hover:bg-blue-500/20"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/5 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, prices..."
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-blue-500/60"
              />
              <button
                type="submit"
                className="glow-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white transition hover:from-blue-500 hover:to-blue-400"
                aria-label="Send message"
              >
                <Send size={17} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="glow-blue fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl sm:right-5"
        aria-label="Chat with Zamyrix AI"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-blue-500/25" />
        <span className="relative">
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </span>
      </motion.button>
    </>
  );
}
