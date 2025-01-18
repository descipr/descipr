'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

// Define the type for the images prop
interface CarouselImage {
  img: string | StaticImageData; // Image can be a string or a StaticImageData type (Next.js images)
  name: string;
}

interface CarouselProps {
  images: CarouselImage[]; // Array of images with the defined structure
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="overflow-hidden bg-blue-background flex flex-col space-y-8 py-8 border-[1px] border-[#4D4D4D] rounded-lg mt-16">
      {/* Heading */}
      <div className="text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold">1000+ <span className='text-blue-Textprimary'>Learners</span></h2>
        <p className="text-gray-400 mt-2 text-sm md:text-lg font-medium">
          to have gained valuable skills through our programs
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-6 max-w-[1280px] mx-auto overflow-hidden">
        <motion.div
          className="flex space-x-6"
          initial={{ x: '100%' }} // Start from off-screen right
          animate={{ x: '-100%' }} // Move left until off-screen
          transition={{
            duration: 15, // Time it takes to move across the screen
            ease: 'linear', // Smooth and consistent motion
            repeat: Infinity, // Infinite loop
          }}
          style={{ display: 'flex' }}
        >
          {/* Render the images twice for seamless looping */}
          {[...images, ...images].map((item, idx) => (
            <div
              key={idx}
              className="w-24 h-24 md:w-40 md:h-32 mb-2 relative flex-shrink-0"
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
};

export default Carousel;
