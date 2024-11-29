import React from "react";
import HeroHeader from "../layout/HeroHeader";
import Domains from "../layout/Domains";
import Skills from "../layout/Skills";
import Projects from "../layout/Projects";
import Contact from "../layout/Contact";

const Home = () => {
  return (
    <div className="w-[100vw] flex flex-col gap-24 overflow-y-scroll overflow-x-clip bg-black">
      <HeroHeader />
      <Domains />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
};

export default Home;
