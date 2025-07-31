import React from "react";

function Herosection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <section
          id="home"
          className="flex flex-wrap justify-around items-center mt-[130px] mb-[75px] px-4"
        >
          <div className="w-full md:w-[35%] text-[2.2rem] md:text-[3rem] leading-snug text-center md:text-left mb-10 md:mb-0">
            Hi, My name is <span className="text-[#aa6be4]">Aashraya</span>
            <div>
              <div>and I am a fresher</div>
              <span className="text-[#aa6be4]">Web Developer</span>
            </div>
          </div>

          <div className="w-full md:w-[35%] flex justify-center">
            <img
              src="./background.png"
              alt="image"
              className="w-[80%] max-w-xs md:max-w-full"
            />
          </div>
        </section>
      </div>
      <hr className="border-none bg-[#9c97f1] h-[0.5px] my-[60px] mx-[10%]" />
    </div>
  );
}

export default Herosection;
