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
  date,
  slug

}) => {
  return (
    <div
      className="flex flex-col h-full overflow-hidden rounded-md shadow-md bg-transparent border-[#4D4D4D]  border-[1px] transition-colors cursor-pointer"
    >
      <div className="relative h-56 w-full">
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
        <div className="flex flex-col justify-between h-full">
          <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl font-Plus-jakarta">
            {title}
          </h3>
          <div className="flex items-center mb-4 space-x-2 text-white">
            <span className="text-sm font-normal md:text-base font-Plus-jakarta">
              {para}
            </span>

          </div>
          <p className="font-Plus-jakarta text-sm  text-white">{date}</p>


        </div>
        <Link
          href={`/courses/${slug}`}
          passHref
          className="mt-auto inline-block"
          target="_blank"
        >
          <button
            className="flex items-center justify-center w-full px-5 py-3 space-x-4 text-black bg-white cursor-pointer border-[1px] rounded-xl border-black-primary transition-colors "
          >
            <span className="text-sm font-semibold md:text-base">Enroll Now</span>
            <FaArrowRight className="h-6 w-6 text-[#EE4924] hover:text-black-primary  transition-all" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
