import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", src: "/html.png" },
  { name: "CSS3", src: "/css.png" },
  { name: "JavaScript", src: "/js.png" },
  { name: "React", src: "/react.png" },
  { name: "Node.js", src: "/node.png" },
  { name: "Tailwind CSS", src: "/tailwind.png" },
  { name: "GitHub", src: "/github.png" },
  { name: "MongoDB", src: "/mongodb.png" },
  { name: "Git", src: "/git.png" },
  { name: "Postman", src: "/postman.png" },
  { name: "Python", src: "/python.png" },
  { name: "ExpressJS", src: "/express.png" },
];

const Skills = () => {
  return (
    <section id="skills" className=" text-white px-6 box-border">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-[#aa6be4] mb-16"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#aa6be4] p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_#aa6be4] flex flex-col items-center"
          >
            {/* Icon Container */}
            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#aa6be4]/20 transition-all duration-300">
              <img
                src={skill.src}
                alt={skill.name}
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            {/* Skill Name */}
            <p className="text-base font-medium text-gray-200 group-hover:text-[#aa6be4]">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
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

export default Skills;
