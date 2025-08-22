import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#12123e] text-white px-4 sm:px-6 lg:px-16 py-4 shadow-md z-50 box-border">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl sm:text-2xl font-semibold cursor-pointer"
        >
          Aashraya&apos;s Portfolio
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm sm:text-base">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="hover:text-[#9999e2] transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#12123e] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
        style={{ zIndex: 49 }}
      >
        <ul className="flex flex-col gap-4 text-center">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="block py-2 text-lg hover:text-[#9999e2] transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
