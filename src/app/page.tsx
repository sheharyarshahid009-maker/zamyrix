import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatAgent from "@/components/ChatAgent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020204]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Process />
      <Team />
      <Contact />
      <Footer />
      <ChatAgent />
    </main>
  );
}
