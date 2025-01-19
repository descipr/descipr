import { CardData } from "@/constants";
import Image from "next/image";

const DifferenceCard = ({ imageUrl, title, description }: CardData) => {
  return (
    <div className="flex flex-col p-4 lg:p-8 space-y-4 rounded-xl shadow-md overflow-hidden  max-w-xs  md:max-w-full h-full border-[1px] border-gray-border ">
      {/* Image Section */}
      <div className="flex justify-center sm:justify-start">
        <Image
          src={imageUrl}
          alt={title}
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col text-white">
        {/* Title */}
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2 font-Plus-jakarta text-center sm:text-left">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg font-light font-Plus-jakarta leading-relaxed text-center sm:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DifferenceCard;
