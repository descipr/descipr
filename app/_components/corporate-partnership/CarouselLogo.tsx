'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface CarouselImage {
    img: string | StaticImageData; // Image can be a string or a StaticImageData type (Next.js images)
    name: string;
}

interface CarouselProps {
    images: CarouselImage[]; // Array of images with the defined structure
}


const CarouselLogo: React.FC<CarouselProps> = ({ images }) => {
    return (
        <div className="overflow-hidden flex flex-col  rounded-lg">
            
            <div className="relative max-w-[1280px] mx-auto overflow-hidden">
                <motion.div
                    className="flex space-x-6"
                    initial={{ x: 0 }} // Start from x=0
                    animate={{ x: ['0%', '100%'] }} 
                    transition={{
                        duration: 15, // Total time for one cycle (left + right)
                        ease: 'linear', // Smooth animation
                        repeat: Infinity, // Infinite loop
                    }}
                    style={{ display: 'flex' }}
                >
                    {/* Render the images */}
                    {images.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-24 h-24 md:w-36 md:h-30 mb-2 relative flex-shrink-0"
                        >
                            <Image
                                src={item.img}
                                alt={item.name}
                                fill
                                style={{ objectFit: 'fill' }}
                                className="rounded-xl"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default CarouselLogo;