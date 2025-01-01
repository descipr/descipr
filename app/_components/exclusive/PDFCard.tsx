import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";

interface PDFCardProps {
  title: string;
  description: string;
  downloadLink: string;
  img: StaticImageData;
}

const PDFCard: React.FC<PDFCardProps> = ({
  title,
  description,
  downloadLink,
  img,
}) => {
  return (
    <div className="text-white rounded-lg shadow-lg flex flex-col  w-full h-full max-w-[340px] md:max-w-[400px] lg:max-w-[580px] md:min-h-[480px]">
      {/* Top Section with Image */}
      <div className="relative h-full md:h-[283px] w-full rounded-lg overflow-hidden">
        <Image
          src={img}
          alt="E-Book Cover"
          objectFit="cover"
          className="rounded-lg border-gray-border border-[1px]"
          width={614}
          height={218}
        />
      </div>

      {/* Content Section */}
      <div className="mt-6 flex flex-col h-full justify-between flex-grow">
        <div>
          <h3 className="text-xs sm:text-sm font-medium text-left text-[#C7C7CC]">
            {title}
          </h3>
          <p className="text-white text-left text-base md:text-2xl mt-2 lg:text-3xl font-bold leading-tight">
            {description}
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-6 flex items-start">
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full max-w-xs px-4 py-3 text-white hover:text-black-primary hover:bg-white border border-white rounded-xl transition-colors duration-300 "
          >
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
              Download
            </span>
            <FaArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 text-[#EE4924] transition-transform duration-300 transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFCard;
