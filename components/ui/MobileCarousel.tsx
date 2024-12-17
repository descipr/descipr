"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MobileCarouselProps {
  images: string[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ images }) => {
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
      className="overflow-hidden cursor-grab w-full"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex space-x-2"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: "calc(100% / 1)", scrollSnapAlign: "center" }}
          >
            <Image
              src={image}
              alt={`Fellowship image ${index}`}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileCarousel;
