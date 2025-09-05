import React from "react";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full max-w-full text-white py-12 px-6 mt-5 box-border relative">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-left"
      >
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#aa6be4]">Contact</h3>
          <div className="mb-3 flex items-center gap-3 text-gray-300">
            <CiLocationOn className="text-xl" />
            <span>Pokhara, Nepal</span>
          </div>
          <div className="mb-3 flex items-center gap-3 text-gray-300">
            <TfiEmail className="text-xl" />
            <span>ghimireaashraya6@gmail.com</span>
          </div>
          <div className="flex items-center gap-5 mt-3">
            <a
              href="https://github.com/Aashraya-Ghimire"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#aa6be4] transition transform hover:scale-110"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/aashraya-ghimire-886486319/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#aa6be4] transition transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/asraya.ghimire"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#aa6be4] transition transform hover:scale-110"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#aa6be4]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
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

        {/* Let's Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#aa6be4]">
            Let's Connect
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Open to freelance, internships, or collaborations. Let’s build
            something great together!
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.hr
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "90%", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-none bg-[#9c97f1] h-[1px] mt-12 mb-6 mx-auto"
      />

      {/* Bottom Section */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-400"
      >
        &copy; {new Date().getFullYear()} — All Rights Reserved | Created by{" "}
        <span className="text-[#aa6be4]">Aashraya Ghimire</span>
      </motion.p>
    </footer>
  );
}

export default Footer;
