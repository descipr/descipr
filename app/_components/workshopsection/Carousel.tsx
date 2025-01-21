'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
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
    const carouselRef = useRef<HTMLDivElement>(null); // Ref for the carousel wrapper

    useEffect(() => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const duration = 40; // Time for one full loop in seconds

        const cloneNodes = () => {
            // Duplicate images 3 times for seamless scrolling
            const firstSet = Array.from(carousel.children) as HTMLElement[];
            for (let i = 0; i < 3; i++) {
                firstSet.forEach((child) => {
                    const clone = child.cloneNode(true) as HTMLElement;
                    carousel.appendChild(clone);
                });
            }
        };

        cloneNodes(); // Clone the initial set of images

        const totalWidth = carousel.scrollWidth / 4; // Total width of the original set (1/4 because of 3 clones)

        gsap.to(carousel, {
            x: `-${totalWidth}px`, // Move the carousel left by the total width
            duration, // Duration of one full loop
            repeat: -1, // Infinite looping
            ease: 'linear', // Smooth, continuous motion
        });

        return () => {
            // Clean up GSAP animations
            gsap.killTweensOf(carousel);
        };
    }, []);

    return (
        <div className="overflow-hidden bg-blue-background flex flex-col space-y-8 py-8 border-[1px] border-[#4D4D4D] rounded-lg mt-16">
            {/* Heading */}
            <div className="text-center text-white">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    1000+ <span className="text-blue-Textprimary">Learners</span>
                </h2>
                <p className="text-gray-400 mt-2 text-sm md:text-lg font-medium">
                    to have gained valuable skills through our programs
                </p>
            </div>

            {/* Carousel */}
            <div className="relative mt-6 max-w-[1280px] mx-auto overflow-hidden">
                <div
                    ref={carouselRef}
                    className="flex space-x-6" // Tailwind classes for layout and spacing
                >
                    {images.map((item, idx) => (
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
                </div>
            </div>
        </div>
    );
};

export default Carousel;
