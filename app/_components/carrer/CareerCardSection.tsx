"use client";
import React, { useState, useEffect } from "react";
import MobileCareerCardCarousel from "./MobileCareerCardCarousel";
import DesktopCareerCardGrid from "./DesktopCareerCardGrid";
import { CardData } from "@/constants";


const CareerCardSection = ({cardData}:{
  cardData:CardData[]
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileCareerCardCarousel cardData={cardData} /> : <DesktopCareerCardGrid cardData={cardData}/>;
};

export default CareerCardSection;
