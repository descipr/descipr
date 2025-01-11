import { trainingRecent } from "@/constants";
import TrainingCard from "./TrainingCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { StaticImageData } from "next/image";


interface TrainingData {
  title: string;
  description: string;
  img: StaticImageData; // Update the type if `img` is not a string
}

interface RecentTrainingProps {
  trainingData: TrainingData[];
}

const MobileTraining = ({ trainingData }: RecentTrainingProps) => {
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
                {trainingData.map((pdf, index) => (
                    <div key={index} className="w-80 flex-shrink-0 mx-auto">
                        <TrainingCard key={index} {...pdf} />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default MobileTraining;