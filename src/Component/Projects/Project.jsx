import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      title: "Functional Calculator",
      img: "/calculator.png",
      description:
        "A basic calculator app that performs arithmetic operations using React and state handling.",
      github:
        "https://github.com/Aashraya-Ghimire/Functional-calculator-using-react",
      live: "#", // Replace with live preview URL
    },
    {
      title: "E-Commerce",
      img: "/bgimage.png",
      description:
        "A responsive e-commerce site with product listings and cart built with React and Tailwind CSS.",
      github: "https://github.com/Aashraya-Ghimire/E-Commerce",
      live: "https://sportstor.netlify.app",
    },
    {
      title: "School Website",
      img: "/School.png",
      description:
        "A modern school website layout showcasing departments, events, and more.",
      github: "https://github.com/Aashraya-Ghimire/school-website",
      live: "#", // Replace with live preview URL
    },
  ];

  return (
    <section id="projects" className="text-white py-16 px-6">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-[#aa6be4] mb-12"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group bg-[#1e1e3f] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_#aa6be4] transition-all"
          >
            {/* Live Preview Icon */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              title="Live Preview"
            >
              <div className="bg-black rounded-full h-8 w-8 flex items-center justify-center hover:bg-[#aa6be4]">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* GitHub Icon */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              title="View on GitHub"
            >
              <img
                src="/github.png"
                alt="github icon"
                className="hover:text-[#aa6be4] bg-black rounded-full h-8 w-8 object-contain"
              />
            </a>

            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />

            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-lg text-gray-300 mb-4">Want to see more projects?</p>
        <a
          href="https://github.com/Aashraya-Ghimire"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#aa6be4] hover:bg-[#8a4fe1] text-white rounded-full font-medium transition transform hover:scale-105 shadow-lg"
        >
          View All
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
}

export default Project;
