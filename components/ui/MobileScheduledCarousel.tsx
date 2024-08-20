"use client";
import React, { useEffect, useState } from "react";
import { ScheduledClassProps } from "@/constants";
import ScheduledClassCard from "./ScheduledClassCard";

interface MobileScheduledCarouselProps {
  scheduledClassData: ScheduledClassProps[];
}

const MobileScheduledCarousel: React.FC<MobileScheduledCarouselProps> = ({
  scheduledClassData,
}) => {
  const [current, setCurrent] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const length = scheduledClassData.length;

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth >= 1024) {
  //         setCardsPerPage(3);
  //       } else if (window.innerWidth >= 768) {
  //         setCardsPerPage(2);
  //       } else {
  //         setCardsPerPage(1);
  //       }
  //     };

  //     handleResize();

  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  const maxIndex = Math.ceil(length / cardsPerPage) - 1;

  const nextSlide = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  return (
    <div className="">
      <div className="container mx-auto  flex flex-col">
        <div className="overflow-x-hidden overflow-y-visible">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {scheduledClassData.map((data, index) => (
              <div
                key={index}
                className="w-full px-4 flex-shrink-0"
                style={{
                  maxWidth: `${100 / cardsPerPage}%`,
                }}
              >
                <ScheduledClassCard
                  key={index}
                  imageUrl={data.imageUrl}
                  title={data.title}
                  para={data.para}
                  date={data.date}
                  background={data.background}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <svg
              className="h-6 w-6 text-gray-700"
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
              className="h-6 w-6 text-gray-700"
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

export default MobileScheduledCarousel;
