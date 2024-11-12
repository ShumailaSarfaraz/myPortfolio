import About from "@/components/About"
import Contect from "@/components/Contect"
import Skills from "@/components/Skills"
import Hero from "@/components/Hero"
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Contect />
      <About />
    </main>    
  );
}
