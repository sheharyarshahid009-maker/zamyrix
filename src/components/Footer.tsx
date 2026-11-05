import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Machine Learning",
  "Deep Learning",
  "Custom Software",
  "Websites",
  "AI Agents",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Zamyrix"
                width={46}
                height={46}
                className="rounded-xl"
              />
              <span className="leading-none">
                <span className="block text-lg font-extrabold tracking-[0.22em]">
                  <span className="silver-text">Z</span>
                  <span className="blue-text">A</span>
                  <span className="silver-text">MYRIX</span>
                </span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.3em] text-slate-500">
                  Intelligence · Innovation · Impact
                </span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              A software & AI studio crafting machine learning, deep learning,
              custom software, websites and AI agents — premium products for
              ambitious businesses.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-blue-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition hover:text-blue-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
              Contact
            </h4>
            <ul className="mt-5 space-y-3.5 text-sm text-slate-400">
              <li>
                <a
                  href="https://wa.me/923396030012"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-blue-300"
                >
                  <Phone size={16} className="shrink-0 text-blue-500" />
                  0339 6030012
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="shrink-0 text-blue-500" />
                Karachi, Pakistan
              </li>
            </ul>
            <a
              href="#contact"
              className="glow-blue mt-6 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-blue-500 hover:to-blue-400"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-slate-500 sm:px-6 md:flex-row md:text-left">
          <p>© 2026 Zamyrix. All rights reserved.</p>
          <p className="uppercase tracking-[0.28em]">
            Intelligence · Innovation · Impact
          </p>
          <p>Crafted with pride in Karachi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
