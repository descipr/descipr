import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface PDFCardProps {
  title: string;
  description: string;
  downloadLink: string;
}

const PDFCard: React.FC<PDFCardProps> = ({
  title,
  description,
  downloadLink,
}) => {
  return (
    <div className="bg-transparent text-white rounded-lg p-4 shadow-lg w-72 h-96 mx-4 flex flex-col justify-between">
      <div className="h-48 bg-gray-600 rounded-xl mb-4"></div>
      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-medium text-left text-[#C7C7CC]">
          {title}
        </h3>
        <p className="text-white mb-4 text-left text-base font-bold md:text-xl">
          {description}
        </p>
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-5 py-3 space-x-4 text-white hover:text-black-primary hover:bg-blue-Textprimary cursor-pointer border-[1px] rounded-xl border-white transition-color mr-2"
        >
          <span className="text-sm font-semibold md:text-lg">download</span>
          <FaArrowRight className="h-6 w-6 text-[#EE4924] transition-all" />
        </a>
      </div>
    </div>
  );
};

export default PDFCard;
