import React from "react";
import { FaUser } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="text-white py-16 px-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 text-3xl font-semibold text-[#aa6be4] mb-10"
      >
        <FaUser />
        <span>About Me</span>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden"
        >
          <img
            src="./profile.jpg"
            alt="Aashraya Ghimire"
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-2xl leading-relaxed text-center md:text-left"
        >
          <p>
            Hi, I'm{" "}
            <span className="text-[#aa6be4] font-medium">Aashraya Ghimire</span>
            ,{" "}
            <span className="font-medium">
              17-year-old fresher web developer
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
        className="mt-12 flex justify-center"
      >
        <a
          href="./Aashraya CV.pdf"
          download
          className="bg-[#aa6be4] text-white px-6 py-3 rounded-full hover:bg-[#8b4ee0] flex items-center gap-2 transition transform hover:scale-105 shadow-lg"
        >
          <FaDownload />
          Download Resume
        </a>
      </motion.div>
      <motion.hr
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-none bg-[#9c97f1] h-[0.5px] mt-20 my-[35px] mx-[10%]"
      />
    </section>
  );
};

export default About;
