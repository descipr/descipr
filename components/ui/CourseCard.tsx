"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { CourseCardProps } from "@/constants";

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  title,
  para,
  bg,
  button,
}) => {
  return (
    <div
      className="flex flex-col h-full overflow-hidden rounded-xl shadow-md bg-white transition-colors cursor-pointer"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = bg; // Hover background
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "white"; // Reset to white
      }}
    >
      <div className="relative h-52 w-full">
        <Image
          src={imageSrc}
          alt={title}
          width={399}
          height={250}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4 space-y-4">
        <div className="flex flex-col">
          <h3 className="mb-2 text-2xl font-bold text-black-primary md:text-3xl font-Plus-jakarta">
            {title}
          </h3>
          <div className="flex items-center mb-4 space-x-2 text-black">
            <span className="text-sm font-normal md:text-md font-Plus-jakarta">
              {para}
            </span>
          </div>
        </div>
        <Link
          href={`/courses/${title}`}
          passHref
          className="mt-auto inline-block"
          target="_blank"
        >
          <button
            className="flex items-center justify-center w-full px-5 py-3 space-x-4 text-black bg-white cursor-pointer border-[1px] rounded-xl border-black-primary transition-colors hover:text-white"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = button; // Hover button background
              (e.currentTarget as HTMLElement).style.color = "white"; // Hover text color
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "white"; // Reset button background
              (e.currentTarget as HTMLElement).style.color = "black"; // Reset text color
            }}
          >
            <span className="text-sm font-semibold md:text-lg">Enroll Now</span>
            <FaArrowRight className="h-6 w-6 text-[#EE4924] hover:text-white  transition-all" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
