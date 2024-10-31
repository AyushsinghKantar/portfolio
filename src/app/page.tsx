import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 grainy-light">
    <Toaster position="bottom-right" />
    <Navbar />
    <Hero />
    <About />
     <Skills />
    <Experience />
    <Projects />
    <Contact />
  </div>
  );
}
