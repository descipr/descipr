import { DesciprDiffernce } from "@/constants";
import Image from "next/image";

const DesciprSection = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex justify-center items-center">
      <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between ">
        {DesciprDiffernce.map((item, index) => (
          <div className="flex flex-col mx-auto items-center justify-center space-y-2">
            <Image
              src={item.src}
              alt={item.alt}
              key={index}
              width={48}
              height={48}
              priority
            />
            <p className="text-white text-md font-light font-Plus-jakarta">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesciprSection;
