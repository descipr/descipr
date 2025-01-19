import { WorkshopCardProps } from "@/constants";
import { home_credit } from "@/utils";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";



const WorkshopDataCard: React.FC<WorkshopCardProps> = ({
    live,
    date,
    title,
    duration,
    mentorName,
    mentorPhoto,
    designation,
    logo,
    buttonText,
  }) => {
    return (
      <div className="rounded-lg bg-gradient-workshop p-5 shadow-lg border-[1px] border-[#4D4D4D] flex flex-col gap-4 h-[450px] justify-between items-start w-full">
        {/* Live and Duration Section */}
        <div className="h-full flex flex-col justify-between  gap-4">
          <div className="flex items-center justify-between">
            {live && (
              <span className="text-sm font-bold text-green-accent px-2 py-1 border border-green-accent rounded-md uppercase">
                {live}
              </span>
            )}
            <p className="text-gray-text text-sm font-bold">{duration}</p>
          </div>
          {/* Date, Time, and Title Section */}
          <div className="flex flex-col items-start h-full">
            <p className="text-gray-700 font-medium text-sm">{`${date}`}</p>
            <h3 className="text-white text-lg md:text-[20px] font-bold leading-snug mt-2 text-left">
              {title}
            </h3>
          </div>
          {/* Divider */}
          <div className="border-t border-gray-600"></div>
        </div>
  
        {/* Mentor Details Section */}
        <div className="flex flex-col items-start justify-center">
          <p className="text-[#8E8E93] text-lg mb-1">Mentor</p>
          <div className="flex items-start gap-4">
            <Image
              src={mentorPhoto}
              alt={mentorName}
              className="w-16 h-16"
            />
            <div className="flex-1 items-start">
              <p className="text-white font-semibold text-base text-left">{mentorName}</p>
              <div className="flex flex-col gap-2">
                <p className="text-white text-sm font-normal">{designation}</p>
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={logo === home_credit ? 40 : 80}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Enroll Button and Signups Section */}
        <div className="flex items-center justify-between mt-4 w-full">
          <button className="flex items-center justify-center w-full px-5 py-3 space-x-4 text-white hover:text-black-primary hover:bg-blue-Textprimary cursor-pointer border-[1px] rounded-xl border-white transition-color mx-auto ">
            <span className="text-sm font-semibold md:text-lg">{buttonText}</span>
            <FaArrowRight className="h-6 w-6 text-[#EE4924] transition-all" />
          </button>
        </div>
      </div>
    );
  };
  
  export default WorkshopDataCard;
  