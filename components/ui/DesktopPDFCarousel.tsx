"use client";
import React, { useState } from "react";
import { pdfs } from "@/constants";
import PDFCard from "./PDFCard";

const DesktopPDFCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const pdfsPerPage = 3;
  const totalPages = Math.ceil(pdfs.length / pdfsPerPage);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalPages);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div className="text-white">
      <div className="container mx-auto text-center flex flex-col">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out items-center justify-center"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex flex-shrink-0 justify-center w-full"
              >
                {pdfs
                  .slice(pageIndex * pdfsPerPage, (pageIndex + 1) * pdfsPerPage)
                  .map((pdf, index) => (
                    <PDFCard key={index} {...pdf} />
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="border-[1px] border-gray-500 p-2 rounded-lg"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="border-[1px] border-gray-500 p-2 rounded-lg"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopPDFCarousel;
