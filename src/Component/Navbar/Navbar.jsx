import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll to section
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu
    }
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#12123e] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="logo.png" alt="Logo" className="h-10 w-10 object-cover" />
          <span
            className="text-2xl font-bold "
            onClick={() => handleScroll("home")}
          >
            Aashraya
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm sm:text-base">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-[#9999e2] cursor-pointer transition-colors"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none p-2"
          >
            {menuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#12123e] text-white flex flex-col gap-4 px-4 pb-4">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
