"use client";
import { Mentors, OutTrainers } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MentorsCarousel = () => {
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
    <motion.div ref={carouselRef} className="overflow-hidden cursor-grab" whileTap={{ cursor: "grabbing" }}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {OutTrainers.map((trainer, index) => (
          <div key={index} className="flex-shrink-0 w-[90%] sm:w-[70%] px-2">
            <Link href={trainer.link}>
              <div className="relative w-full pb-1/1 overflow-hidden rounded-lg">
                <Image
                  src={trainer.src}
                  alt={trainer.alt}
                  className="rounded-lg object-cover w-full h-full"
                  width={180}
                  height={190}
                  priority
                />
              </div>
            </Link>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MentorsCarousel;
