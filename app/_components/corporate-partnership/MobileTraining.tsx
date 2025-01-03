import { trainingRecent } from "@/constants";
import TrainingCard from "./TrainingCard";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MobileTraining = () => {
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
                {trainingRecent.map((pdf, index) => (
                    <div key={index} className="w-80 flex-shrink-0 mx-auto">
                        <TrainingCard key={index} {...pdf} />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default MobileTraining;