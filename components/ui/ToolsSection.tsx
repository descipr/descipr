import { Tools } from "@/constants";
import Image from "next/image";

const ToolsSection = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col gap-12 justify-center items-center">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white heading">Concepts You Will Learn</h2>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between ">
        {Tools.map((item, index) => (
          <div className="flex flex-col mx-auto items-center justify-center space-y-2">
            <Image
              src={item.src}
              alt={item.alt}
              key={index}
              width={40}
              height={40}
              priority
            />
            <p className="text-white text-sm font-light font-Plus-jakarta text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
