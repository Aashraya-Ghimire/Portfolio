import React from "react";
import { motion } from "framer-motion";

function Herosection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <section
          id="home"
          className="flex flex-wrap justify-around items-center mt-[130px] mb-[75px] px-4"
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[35%] text-[2.2rem] md:text-[3rem] leading-snug text-center md:text-left mb-10 md:mb-0"
          >
            Hi, My name is <span className="text-[#aa6be4]">Aashraya</span>
            <div>
              <div>and I am a fresher</div>
              <span className="text-[#aa6be4]">Web Developer</span>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[35%] flex justify-center"
          >
            <img
              src="./background.png"
              alt="image"
              className="w-[80%] max-w-xs md:max-w-full"
            />
          </motion.div>
        </section>
      </div>

      {/* Divider Line */}
      <motion.hr
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80%", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-none bg-[#9c97f1] h-[0.5px] my-[35px] mx-[10%]"
      />
    </div>
  );
}

export default Herosection;
