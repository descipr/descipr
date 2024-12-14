import React from "react";
import Image from "next/image";
import { BackgroundLogo } from "@/utils";

const Hero: React.FC = () => {
  return (
    <section className="section-style items-center">
      <Image
        src={BackgroundLogo}
        alt="background image"
        width={480}
        className="absolute top-0 right-0 -z-10"
      />
      <div className="relative flex flex-col items-center justify-center leading-relaxed tracking-wide space-y-5 md:space-y-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-6xl font-bold text-center text-white leading-[120%]">
            Become a{" "}
            <span className="text-blue-Textprimary font-Plus-jakarta">
              360-degree
            </span>
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold text-center text-blue-Textprimary mt-1 md:mt-3 leading-[120%]">
            AI Professional
          </h1>
        </div>
        <p className="text-sm md:text-xl leading-[150%] text-white text-center font-normal">
          Fast-track your career with live Cohort-based{" "}
          <span className="text-blue-Textprimary font-medium">
            learning and mentorship from Hiring managers
          </span>
        </p>
        <div className="flex items-center justify-between gap-4">
          <button
            //   onClick={() => setIsOpen(true)}
            className="flex items-center px-6 py-4 md:px-8 md:py-4 space-x-2  text-black bg-blue-Textprimary hover:bg-white rounded-lg md:rounded-xl shadow-md text-base md:text-lg font-semibold"
          >
            {" "}
            Explore fellowhips
          </button>
          <button
            //   onClick={() => setIsOpen(true)}
            className="flex items-center px-6 py-4 md:px-8 md:py-4 space-x-2 text-white bg-transparent rounded-lg md:rounded-xl shadow-md text-base md:text-lg font-semibold border-[2px] border-white"
          >
            {" "}
            Explore Workshops
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
