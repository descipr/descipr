import { desciprDiffernceCardData } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DifferenceCard from "./DifferenceCard";

const MobileDifferenceSection = () => {
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
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {desciprDiffernceCardData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[90%] sm:w-full px-2"
          >
            <DifferenceCard
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description} key={0} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileDifferenceSection;
