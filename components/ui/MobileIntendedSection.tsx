import { BonusWorkshop } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import IntendedForCard from "../IntendedForCard";

const MobileIntendedSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
    }
  }, [BonusWorkshop]);
  return (
    <motion.div
      ref={carouselRef}
      className="container overflow-hidden"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {BonusWorkshop.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-full px-4 md:w-1/2">
            <IntendedForCard
              key={card.id}
              title={card.title}
              description={card.description}
              background={card.background}
              id={0}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileIntendedSection;
