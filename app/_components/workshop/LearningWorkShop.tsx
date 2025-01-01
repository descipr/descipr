"use client";
import { useEffect, useState } from "react";

import { LearningCardData } from "@/constants";
import DesktopLearningSection from "./DesktopLearningSection";
import MobileWorkshopLearning from "./MobileWorkshopLearning";

interface ILearningWorkshop {
  data:LearningCardData[]
}

const LearningWorkShop = ({data} : ILearningWorkshop) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section-style gap-6 sm:gap-0 overflow-hidden">
      <h2 className="heading text-white">
        What Will<span className="text-blue-Textprimary"> You Learn</span>
      </h2>

      {isDesktop ? <DesktopLearningSection Wdata = {data} /> : <MobileWorkshopLearning Wdata = {data} />}
    </section>
  );
};

export default LearningWorkShop;
