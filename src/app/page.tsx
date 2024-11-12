"use client";

import About from "@/components/About"
import Contect from "@/components/Contact"
import Skills from "@/components/Skills"
import Hero from "@/components/Hero"
import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <main>
      <Hero />
      <Skills />
      <Contect />
      <About />
    </main>    
  );
}
