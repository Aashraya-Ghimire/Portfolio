import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#12123e] text-white px-6 py-4 shadow-md z-50">
      <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
    
        <div className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-0">
          Aashraya's Portfolio
        </div>

        <ul className="flex flex-wrap gap-4 sm:gap-8 text-sm sm:text-base">
          <li>
            <a href="#home" className="hover:text-[#9999e2] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#9999e2] transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#9999e2] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#9999e2] transition">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
