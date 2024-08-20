"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MobileCarouselProps {
  images: string[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 1000); 

    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className=" ">
      <div className="container mx-auto text-center flex flex-col">
        <div className="overflow-x-hidden overflow-y-visible p-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full px-4 flex-shrink-0"
                style={{ maxWidth: "100%" }}
              >
                <Image
                  src={image}
                  alt={`Fellowship image ${index}`}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
