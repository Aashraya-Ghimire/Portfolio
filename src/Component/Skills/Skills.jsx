import React from "react";

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

function Skills() {
  return (
    <section className="bg-[#12123e] text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-[#aa6be4] mb-16">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#aa6be4] p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_#aa6be4] flex flex-col items-center"
          >
            <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#aa6be4]/20 transition-all duration-300">
              <img
                src={skill.src}
                alt={skill.name}
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
            <p className="text-base font-medium text-gray-200 group-hover:text-[#aa6be4]">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
