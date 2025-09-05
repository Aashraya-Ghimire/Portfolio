import React from "react";
import { FaUser } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className=" relative w-full max-w-full min-h-full flex flex-col items-center justify-center px-4 text-white box-border"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#aa6be4] mb-10"
      >
        <FaUser />
        <span>About Me</span>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl px-2">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden flex-shrink-0"
        >
          <img
            src="./profile.jpg"
            alt="Aashraya Ghimire"
            className="w-full max-w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center md:text-left"
        >
          <p>
            Hi, I'm{" "}
            <span className="text-[#aa6be4] font-medium">Aashraya Ghimire</span>
            ,{" "}
            <span className="font-medium">
              {new Date().getFullYear() - 2008}-year-old fresher web developer
            </span>{" "}
            from Nepal. I specialize in{" "}
            <span className="text-[#aa6be4]">
              React, JavaScript, HTML, CSS, Tailwind, and MongoDB
            </span>
            , creating clean and responsive websites while continuously learning
            new tech.
          </p>
        </motion.div>
      </div>

      {/* Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center w-full"
      >
        <a
          href="./Aashraya CV.pdf"
          download
          className="bg-[#aa6be4] text-white px-6 py-3 rounded-full hover:bg-[#8b4ee0] flex items-center gap-2 transition transform hover:scale-105 shadow-lg text-base md:text-lg"
        >
          <FaDownload />
          Download Resume
        </a>
      </motion.div>

      {/* Divider */}
      <motion.hr
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-none bg-[#9c97f1] h-[0.5px] mt-16 mx-[10%]"
      />
    </section>
  );
};

export default About;
