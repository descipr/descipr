import { IwebinarForData } from "@/constants";


const IntendedForCard = ({
  title,
  description,
  background,
}: IwebinarForData) => {
  return (
    <div
      className="flex flex-col max-w-md p-6 space-y-4 rounded-xl shadow-md h-full items-center"
      style={{ backgroundColor: background }}
    >
      <div className="flex flex-col gap-4 w-full items-center">
        <h2 className="text-xl font-bold text-black text-center">{title}</h2>
        <div className="w-full">
          <div className="border-t border-gray-300"></div>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full items-center ">
        <p className="text-lg font-semibold text-left">{description}</p>
      </div>
    </div>
  );
};

export default IntendedForCard;
