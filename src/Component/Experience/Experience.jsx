import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer & CMS Intern",
    company: "DeerWalk",
    duration: "May 2025 – Aug 2025",
    description:
      "Developed CMS features using React & Next.js, integrated APIs, and optimized content workflows.",
    logo: "/deerwalk.jpg",
  },
  {
    role: "Frontend Developer Training",
    company: "Nepa Tronix",
    duration: "Jun 2022 – Aug 2025",
    description:
      "Built responsive websites with HTML, CSS, JS & React, focusing on UI, performance, and animations.",
    logo: "/nepa.png",
  },
  {
    role: "Hardware Technician Intern",
    company: "Yarsa Tech",
    duration: "May 2024 – Jul 2024",
    description:
      "Assisted in hardware troubleshooting, system assembly, and providing technical support to clients.",
    logo: "/yarsa.png",
  },
];

function Experience() {
  return (
    <section id="experience" className="text-white px-6 box-border">
      <h2 className="text-4xl font-bold text-center text-[#aa6be4] mb-16">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full my-2 border-l border-gray-100 hidden md:block"></div>
        <div className="absolute left-4 h-full border-l border-gray-100 md:hidden"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 relative w-full flex flex-col md:flex-row items-start"
            >
              {/* Mobile & Tablet */}
              <div className="md:hidden absolute left-0">
                <div className="absolute top-1 -left-2 w-12 h-12 rounded-full border-2 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <div className="w-[2px] bg-gray-700"></div>
              </div>

              {/* Desktop: Horizontal Connector */}
              <div
                className={`hidden md:block absolute top-6 h-[2px] bg-gray-700 w-6 ${
                  isLeft
                    ? "right-1/2 transform translate-x-1/2"
                    : "left-1/2 transform -translate-x-1/2"
                }`}
              ></div>

              {/* Card */}
              <div
                className={`mt-8 md:mt-0 p-6 bg-[#1e1e3f] rounded-xl shadow-lg hover:shadow-[0_0_20px_#aa6be4] transition-all md:w-5/12 ${
                  isLeft
                    ? "md:mr-auto md:text-right"
                    : "md:ml-auto md:text-left"
                }`}
              >
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {exp.company} • {exp.duration}
                </p>
                <p className="text-gray-300">{exp.description}</p>
              </div>

              {/* Desktop Logo in center */}
              <img
                src={exp.logo}
                alt={exp.company}
                className="hidden md:block w-14 h-14 object-cover rounded-full border-2 absolute top-2 left-1/2 transform -translate-x-1/2"
              />
            </motion.div>
          );
        })}
      </div>

      <motion.hr
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-none bg-[#9c97f1] h-[0.5px] mt-20 my-[35px] mx-auto"
      />
    </section>
  );
}

export default Experience;
