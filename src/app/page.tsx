import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 grainy-light">
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
