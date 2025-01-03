"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardData, careerCardData } from "@/constants";
import CareerCard from "./CareerCard";

const MobileCareerCardCarousel  = ({cardData}:{
  cardData:CardData[]
}) => {
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
            className="container mx-auto px-4 py-6 overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
        >
            <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="flex"
            >
                {cardData.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full px-2 md:w-1/2">
                        <CareerCard
                            imageUrl={card.imageUrl}
                            title={card.title}
                            description={card.description}
                            key={index}
                        />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MobileCareerCardCarousel;
