import { CardData } from "@/constants";
import Image from "next/image";

const CareerCard = ({ imageUrl, title, description }: CardData) => {
  return (
    <div className="relative flex items-start justify-start w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden max-w-[395px] shadow-lg border-gray-border border-[1px]">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Text Content */}
      <div className="relative z-10 p-6">
        <h2 className="text-white text-xl md:text-3xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-white text-sm md:text-lg font-light">{description}</p>
      </div>
    </div>
  );
};

export default CareerCard;
