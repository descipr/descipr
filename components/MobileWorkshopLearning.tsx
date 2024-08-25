"use client";
import { workshopData } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LearningCardWorkshop from "./ui/LearningCardWorkshop";

const MobileWorkshopLearning = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
    }
  }, [workshopData]);
  return (
    <motion.div ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {workshopData.map((data, i) => (
          <div key={i} className="flex-shrink-0 w-70 px-2">
            <LearningCardWorkshop data={data} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileWorkshopLearning;
