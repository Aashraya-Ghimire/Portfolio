import React from "react";
import { FaUser } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className=" text-white py-16 px-6">
      <div className="flex items-center justify-center gap-3 text-3xl font-semibold text-[#aa6be4] mb-10">
        <FaUser />
        <span>About Me</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden ">
          <img
            src="./profile.jpg"
            alt="Aashraya Ghimire"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="max-w-xl text-lg leading-relaxed text-center md:text-left">
          <p>
            Hi, I'm{" "}
            <span className="text-[#aa6be4] font-medium">Aashraya Ghimire</span>
            , a{" "}
            <span className="font-medium">
              17-year-old fresher web developer
            </span>{" "}
            from Nepal with a passion for building clean, responsive websites. I
            specialize in{" "}
            <span className="text-[#aa6be4]">
              React.js, JavaScript, HTML, CSS
            </span>
            , and <span className="text-[#aa6be4]">Tailwind CSS</span>, and love
            turning ideas into smooth, user-friendly experiences.
          </p>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/resume.pdf"
          download
          className="bg-[#aa6be4] text-white px-6 py-3 rounded-full hover:bg-[#8b4ee0] flex items-center gap-2 transition"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
