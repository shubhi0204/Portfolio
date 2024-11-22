import React from "react";
import HeroHeader from "../layout/HeroHeader";
import Domains from "../layout/Domains";
import Skills from "../layout/Skills";
import Projects from "../layout/Projects";

const Home = () => {
  return (
    <div className="flex flex-col gap-24 overflow-y-scroll">
      <HeroHeader />
      <Domains />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
