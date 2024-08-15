import { Learning } from "@/constants";
import Image from "next/image";
import HorizontalLine from "./HorizontalLine";

const LearnSection = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col space-y-4 justify-center items-center">
      <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between ">
        {Learning.map((item, index) => (
          <div className="flex flex-col mx-auto items-center justify-center space-y-2">
            <Image
              src={item.src}
              alt={item.alt}
              key={index}
              width={40}
              height={40}
              priority
            />
            <p className="text-white text-sm font-light font-Plus-jakarta w-3/4 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <HorizontalLine />
    </div>
  );
};

export default LearnSection;