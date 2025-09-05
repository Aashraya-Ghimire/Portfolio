import React from "react";
import Navbar from "../Navbar/Navbar";
import Herosection from "../Hero/Herosection";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";

function Landing() {
  return (
    <div className="overflow-x-hidden w-full box-border">
      <Navbar />
      <Herosection />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
