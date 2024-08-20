"use client";
import React, { useEffect, useState } from "react";
import TrainerSection from "./TrainerSection";
import MobileTrainerCarousel from "./ui/MobileTrainerCarousel";

const OurTrainers = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white text-center text-2xl md:text-4xl font-bold">
          Learn from Our Trainers
        </h2>
      </div>
      {isMobile ? <MobileTrainerCarousel /> : <TrainerSection />}
    </section>
  );
};

export default OurTrainers;
