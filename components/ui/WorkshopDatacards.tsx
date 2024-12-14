import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface WorkshopCardProps {
  live: string;
  date: string;
  time: string;
  title: string;
  duration: string;
  mentorName: string;
  mentorPhoto: StaticImageData;
  designation: string;
  logo: StaticImageData;
  signups: number;
}

const WorkshopDataCard: React.FC<WorkshopCardProps> = ({
  live,
  date,
  time,
  title,
  duration,
  mentorName,
  mentorPhoto,
  designation,
  logo,
  signups,
}) => {
  return (
    <div className="rounded-lg bg-gradient-workshop p-5 shadow-lg border-[1px] border-[#4D4D4D] flex flex-col gap-4 h-full justify-between w-full">
      {/* Live and Duration Section */}
      <div className="flex items-center justify-between">
        {live && (
          <span className="text-base font-bold text-[#39D98A] px-2 py-1 border border-[#39D98A] rounded-md uppercase">
            . {live}
          </span>
        )}
        <p className="text-white text-lg font-bold">{duration}</p>
      </div>

      {/* Date, Time, and Title Section */}
      <div>
        <p className="text-white text-sm">{`${date}, ${time}`}</p>
        <h3 className="text-white text-lg font-bold leading-snug mt-2">
          {title}
        </h3>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600"></div>

      {/* Mentor Details Section */}
      <div className="">
        <p className="text-[#8E8E93] text-lg mb-1">Mentor</p>
        <div className="flex items-center gap-3">
          <Image src={mentorPhoto} alt={mentorName} className=" w-20 h-20 " />
          <div className="flex-1">
            <p className="text-white font-medium">{mentorName}</p>
            <p className="text-gray-400 text-sm">{designation}</p>
            <Image src={logo} alt="Company Logo" className="w-14 h-14" />
          </div>
        </div>
      </div>

      {/* Enroll Button and Signups Section */}
      <div className="flex items-center justify-between mt-4">
        <button className="flex items-center justify-center w-full px-5 py-3 space-x-4 text-white hover:text-black-primary hover:bg-blue-Textprimary cursor-pointer border-[1px] rounded-xl border-white transition-color mr-2">
          <span className="text-sm font-semibold md:text-lg">Enroll Now</span>
          <FaArrowRight className="h-6 w-6 text-[#EE4924] transition-all" />
        </button>
        <p className="text-gray-400 text-sm">{`${signups}+ Signups`}</p>
      </div>
    </div>
  );
};

export default WorkshopDataCard;
