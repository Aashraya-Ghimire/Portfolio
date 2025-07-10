import React from "react";
import { FaHeadset } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className=" text-white py-20 px-6">
      <div className="flex items-center justify-center gap-3 mb-12 text-[#aa6be4]">
        <FaHeadset className="text-5xl mb-2" />
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
      
        <form
          action=""
          className="w-full md:w-1/2 space-y-6 bg-[#1e1e3f] p-8 rounded-xl shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="What's your name?"
              required
              className="w-full px-4 py-2 rounded-md bg-[#2c2c4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#aa6be4] transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="What's your email address?"
              required
              className="w-full px-4 py-2 rounded-md bg-[#2c2c4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#aa6be4] transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="What do you want to say?"
              required
              className="w-full px-4 py-2 rounded-md bg-[#2c2c4a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#aa6be4] transition duration-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#aa6be4] hover:bg-[#8a4fe1] transition px-6 py-2 rounded-full font-medium text-white shadow-md cursor-pointer"
          >
            Submit
          </button>
        </form>
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="/contact.png"
            alt="Contact illustration"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
export default Contact;