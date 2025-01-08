"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      className="overflow-hidden cursor-grab"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex space-x-4"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[90%] sm:w-[70%] px-2"
          >
            <Image
              src={image}
              alt={`Carousel image ${index}`}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileCarousel;
``