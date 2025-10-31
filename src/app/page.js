'use client'
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Project";
import Contact from "./Component/Contact";
import CodingProfiles from "./Component/CoadingProfiles";

export default function Home() {
  return (
    <div className="bg-black">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <CodingProfiles/>
      <Skills/>
      <Contact/>
    </div>
  );
}
