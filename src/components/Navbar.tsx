"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass mt-4 flex items-center justify-between rounded-2xl px-4 py-3">
          {/* Logo + Name */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Zamyrix Logo"
              width={46}
              height={46}
              className="rounded-lg"
            />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-[0.18em]">
                <span className="silver-text">Z</span>
                <span className="blue-text">A</span>
                <span className="silver-text">MYRIX</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.32em] text-slate-400">
                Intelligence · Innovation · Impact
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="glow-blue hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:from-blue-500 hover:to-blue-400 sm:flex"
            >
              Start a Project
              <ArrowRight size={16} />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg border border-white/10 p-2 text-slate-200 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="glass mt-2 rounded-2xl p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Start a Project
                <ArrowRight size={16} />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
