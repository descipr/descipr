"use client";
import { CourseDetail, courseDetails } from "@/constants";
import { cleanUpSlug } from "@/utils";
import React from "react";
import { useParams } from "next/navigation";

const FloatingBar = () => {
  const { slug } = useParams();

  const cleanedSlug = typeof slug === "string" ? cleanUpSlug(slug) : "";

  const course: CourseDetail | undefined = courseDetails.find(
    (course) => cleanUpSlug(course.heading) === cleanedSlug
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black-primary text-white shadow-lg py-4 z-20 opacity-95">
      <div className="container mx-auto max-w-7xl flex flex-row justify-between items-center space-x-2 md:space-x-4 px-2 md:px-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-400">
            Course starts on
          </span>
          <span className="text-sm sm:text-base md:text-lg font-semibold">
            {course.dateOfStart}
          </span>
        </div>

        <div className="sm:flex flex-col items-center md:items-start hidden">
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-400">
            Time commitment
          </span>
          <span className="text-sm sm:text-base md:text-lg font-semibold">
            {course.timeCommitment}
          </span>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-400">
            Cost
          </span>
          <div className="flex items-baseline space-x-1 md:space-x-2">
            <span className="text-base sm:text-lg md:text-2xl font-bold">
              {course.cost}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 line-through">
              {course.actualcost}
            </span>
          </div>
        </div>

        <div className="relative flex items-center">
          <span className="absolute -top-2 md:-top-3 -left-2 md:-left-4 bg-green-500 text-white text-[8px] sm:text-[10px] md:text-xs font-semibold rounded-full px-1 sm:px-2 py-[2px] z-30">
            {course.seatsLeft} (Filling fast)
          </span>
          <button className="ml-2 sm:ml-4 md:ml-8 px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-white text-black-primary font-semibold rounded-md flex items-center space-x-1 sm:space-x-2 relative z-10">
            <span className="text-xs sm:text-sm md:text-base">Enroll now</span>
            <span className="text-xs sm:text-sm md:text-base">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingBar;
