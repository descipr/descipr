import React from "react";
import Image from "next/image";
import { BackgroundLogo } from "@/utils";
import Link from "next/link";
import Carousel from "../workshopsection/Carousel";
import { Carouselimages } from "@/constants";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-4  flex flex-col space-y-4 md:space-y-8 max-w-7xl items-center">
      <Image
        src={BackgroundLogo}
        alt="background image"
        width={480}
        className="absolute top-0 right-0 -z-10"
      />
      <div className="relative flex flex-col items-center  leading-relaxed tracking-wide gap-4 ">
        <div className="flex flex-col ">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-white leading-[120%]">
            Become a{" "}
            <span className="text-blue-Textprimary font-Plus-jakarta">
              360-degree AI Professional
            </span>
          </h1>
          
        </div>
        <p className="text-sm md:text-lg leading-[150%] text-white text-center font-normal">
          Fast-track your career with live Cohort-based{" "}
          <span className="text-blue-Textprimary font-medium">
            learning and mentorship from Hiring managers
          </span>
        </p>
        <div className="flex items-center justify-between gap-4 mt-2 md:mt-6">
          <Link
            href="#fellowships"
            className="flex items-center px-6 py-4 md:px-8 md:py-4 space-x-2 text-black bg-blue-Textprimary hover:bg-white rounded-lg md:rounded-xl text-base md:text-lg font-semibold"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      {/* Pass images as a prop */}
      <Carousel images={Carouselimages} />
    </section>
  );
};

export default Hero;
