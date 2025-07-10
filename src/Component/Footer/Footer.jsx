import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white text-center py-10">
      <div className="flex flex-col md:flex-row justify-around items-start px-10 gap-10 mb-6 text-left">
     
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#aa6be4]">Contact</h3>
          <div className="mb-2 flex items-center gap-3 text-[#fbfbfb]">
            <CiLocationOn className="text-xl" />
            <span>Pokhara, Nepal</span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <TfiEmail className="text-xl" />
            <span>ghimireaashraya6@gmail.com</span>
          </div>
         
          <div className="mb-2 flex items-center gap-4">
            <a
              href="https://github.com/Aashraya-Ghimire"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#aa6be4] transition"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/aashraya-ghimire-886486319/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
             <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/asraya.ghimire"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
             <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#aa6be4]">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-[#9c97f1] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#9c97f1] transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#9c97f1] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#9c97f1] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#aa6be4]">
            Let's Connect
          </h3>
          <p>Open to freelance, internships, or collaborations.</p>
        </div>
      </div>

      <hr className="border-none bg-[#9c97f1] h-[1px] mx-10 mb-4" />

      <p className="text-sm text-gray-400">
        &copy; 2025 — All Rights Reserved | Created by{" "}
        <span className="text-[#aa6be4]">Aashraya Ghimire</span>
      </p>
    </footer>
  );
}

export default Footer;
