import { CardData } from "@/constants";
import Image from "next/image";

const DifferenceCard = ({ imageUrl, title, description, }: CardData) => {
    return (
        <div
            className="flex flex-col p-4 pb-8 space-y-4 rounded-xl shadow-md overflow-hidden h-full w-full bg-gradient-card"

        >
            <div className="flex">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={48}
                    height={48}
                    className="object-cover w-12 h-12 md:w-18 md:h-18"
                    priority
                />
            </div>
            <div className="flex flex-col text-white">
                <h2 className="mb-2 text-base md:text-2xl font-bold  font-Plus-jakarta">
                    {title}
                </h2>
                <p className="font-light text-sm md:text-lg font-Plus-jakarta">{description}</p>
            </div>
        </div>
    );
}

export default DifferenceCard;