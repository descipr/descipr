"use client";
import { HsbcLogo, workshop_data_tanoy } from "@/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import WorkshopDataCard from "./WorkshopDataCard";
import { workshops } from "@/constants";




const MobileWorkshopDataCard = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
      console.log(width);
    }
  }, []);
  return (
    <motion.div ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {workshops.map((workshop, i) => (
          <div key={i} className="flex-shrink-0 w-[90%] sm:w-full px-2">
            <WorkshopDataCard key={i} {...workshop} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileWorkshopDataCard;
