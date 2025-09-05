import React from "react";

const Hero_Section = () => {
  return (
    <div className="mt-20">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Hi, My name is <span className="text-[#aa6be4]">Aashraya</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700">and I am a fresher</p>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <span className="text-[#aa6be4]">Web Developer</span>
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <button className="px-6 py-2 bg-[#aa6be4] text-white font-medium rounded-lg shadow hover:bg-[#924dd9] transition">
              Hire Me
            </button>
            <button className="px-6 py-2 border-2 border-[#aa6be4] text-[#aa6be4] font-medium rounded-lg hover:bg-[#aa6be4] hover:text-white transition">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src="./background.png"
            alt="Aashraya"
            className="w-64 sm:w-80 md:w-full max-w-sm rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Separator Line */}
      <hr className="border-none bg-[#9c97f1] h-[2px] my-[40px] mx-[10%] rounded-full" />
    </div>
  );
};

export default Hero_Section;
