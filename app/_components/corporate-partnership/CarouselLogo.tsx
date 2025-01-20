'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';

interface CarouselImage {
    img: string | StaticImageData; // Image can be a string or a StaticImageData type (Next.js images)
    name: string;
}

interface CarouselProps {
    images: CarouselImage[]; // Array of images with the defined structure
}

const CarouselLogo: React.FC<CarouselProps> = ({ images }) => {
    const carouselRef = useRef<HTMLDivElement>(null); // Ref for the carousel wrapper

    useEffect(() => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const duration = 25; // Time for one full loop in seconds

        const cloneNodes = () => {
            // Duplicate images 3 times to ensure infinite scrolling
            const firstSet = Array.from(carousel.children) as HTMLElement[];
            for (let i = 0; i < 3; i++) {
                firstSet.forEach((child) => {
                    const clone = child.cloneNode(true) as HTMLElement;
                    carousel.appendChild(clone);
                });
            }
        };

        cloneNodes(); // Clone the initial set of images

        const totalWidth = carousel.scrollWidth / 4; // Total width of the original set (1/4 because we cloned 3 times)

        gsap.to(carousel, {
            x: `${totalWidth}px`, // Move the carousel left by the total width
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
        <div className="overflow-hidden flex justify-center max-w-4xl">
            <div
                ref={carouselRef}
                className="flex space-x-6" // Tailwind classes for layout and spacing
            >
                {images.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-24 h-24 md:w-36 md:h-36 flex-shrink-0 relative"
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
    );
};

export default CarouselLogo;
