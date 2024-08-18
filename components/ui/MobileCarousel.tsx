"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MobileCarouselProps {
  images: string[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="text-white ">
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
                  width={800} 
                  height={500} 
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 sm:mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <svg
              className="h-4 w-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <svg
              className="h-4 w-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
