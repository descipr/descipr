"use client";
import React, { useState, useEffect } from "react";
import { careerCardData } from "@/constants";
import CareerCard from "./CareerCard";

const CareerCardSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  const length = careerCardData.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobile(false);
        setCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setIsMobile(false);
        setCardsPerPage(2);
      } else {
        setIsMobile(true);
        setCardsPerPage(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.ceil(length / cardsPerPage) - 1;

  const nextSlide = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {!isMobile ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {careerCardData.map((card, index) => (
            <CareerCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              background={card.background}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className="container mx-auto flex flex-col">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {careerCardData.map((card, index) => (
                  <div
                    key={index}
                    className="w-full px-4 flex-shrink-0"
                    style={{ maxWidth: `${100 / cardsPerPage}%` }}
                  >
                    <CareerCard
                      imageUrl={card.imageUrl}
                      title={card.title}
                      description={card.description}
                      background={card.background}
                      key={index}
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
      )}
    </div>
  );
};

export default CareerCardSection;
