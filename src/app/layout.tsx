import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zamyrix — Intelligence. Innovation. Impact.",
  description:
    "Zamyrix builds Machine Learning, Deep Learning, Software, Websites and AI Agents for businesses that want to level up.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#020204] text-slate-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
