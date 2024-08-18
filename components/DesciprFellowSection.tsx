"use client";
import React, { useState, useEffect } from "react";
import FellowshipSection from "./ui/FellowshipSection";
import { FellowshipImages } from "@/constants";
import MobileCarousel from "./ui/MobileCarousel";

const DesciprFellowSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <section className="container mx-auto px-4 py-4 md:py-8 flex flex-col items-center space-y-4 md:space-y-8">
        <div className="flex flex-col space-y-1 items-center justify-center">
          <h2 className="heading text-white">
            Become a <span className="text-blue-Textprimary">Descipr Fellow</span> and
          </h2>
          <h2 className="heading text-white">Experience the difference</h2>
        </div>
        <MobileCarousel images={FellowshipImages} />
      </section>
    );
  }

  return (
    <section className="section-style">
      <div className="flex flex-col space-y-1 items-center justify-center">
        <h2 className="heading text-white">
          Become a <span className="text-blue-Textprimary">Descipr Fellow</span>{" "}
          and
        </h2>
        <h2 className="heading text-white">Experience the difference</h2>
      </div>

      <FellowshipSection />
    </section>
  );
};

export default DesciprFellowSection;
