import React from "react";
function Project() {
  const projects = [
    {
      title: "Functional Calculator",
      img: "/calculator.png",
      description:
        "A basic calculator app that performs arithmetic operations using React and state handling.",
      github:
        "https://github.com/Aashraya-Ghimire/Functional-calculator-using-react",
    },
    {
      title: "E-Commerce",
      img: "/Ecommerce.png",
      description:
        "A responsive e-commerce site with product listings and cart built with React and Tailwind CSS.",
      github: "https://github.com/Aashraya-Ghimire/E-commerce",
    },
    {
      title: "School Website",
      img: "/School.png",
      description:
        "A modern school website layout showcasing departments, events, and more.",
      github: "https://github.com/Aashraya-Ghimire/school-website",
    },
  ];

  return (
    <section id="projects" className="text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-[#aa6be4] mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-[#1e1e3f] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_#aa6be4] transition-all"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              title="View on GitHub"
            >
              <img
                src="/github.png"
                alt="github icon"
                className=" hover:text-[#aa6be4] bg-black rounded-[50%] h-8 w-8 box-border object-contain"
              />
            </a>

            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
       <div className="text-center mt-16">
        <p className="text-lg text-gray-300 mb-4">Want to see more projects?</p>
        <a
          href="https://github.com/Aashraya-Ghimire"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#aa6be4] hover:bg-[#8a4fe1] text-white rounded-full font-medium transition transform hover:scale-105 shadow-lg"
        >
          View All
        </a>
      </div>
    </section>
  );
}

export default Project;
