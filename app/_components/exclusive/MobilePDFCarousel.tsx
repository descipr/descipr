"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pdfs } from "@/constants";
import PDFCard from "./PDFCard";

const MobilePDFCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      className="overflow-hidden cursor-grab"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex space-x-4"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {pdfs.map((pdf, index) => (
          <div key={index} className="w-80 flex-shrink-0 mx-auto">
            <PDFCard {...pdf} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobilePDFCarousel;
