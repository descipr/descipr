"use client";
import React, { useEffect, useState } from "react";
import DesktopWorkshopDataCard from "./DesktopWorkshopDataCard";
import MobileWorkshopDataCard from "./MobileWorkshopDataCard";

const WorkshopSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="section-style overflow-hidden">
      <h2 className="heading text-white">
        Work<span className="text-blue-Textprimary">shops</span>
      </h2>
      {isDesktop ? <DesktopWorkshopDataCard /> : <MobileWorkshopDataCard />}
    </section>
  );
};

export default WorkshopSection;
