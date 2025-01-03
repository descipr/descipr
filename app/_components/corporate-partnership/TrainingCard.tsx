import React from "react";
import Image, { StaticImageData } from "next/image";

interface PDFCardProps {
    title: string;
    description: string;
    img: StaticImageData;
}

const TrainingCard: React.FC<PDFCardProps> = ({
    title,
    description,
    img,
}) => {
    return (
        <div className="text-white rounded-lg shadow-lg flex flex-col  w-full h-full max-w-[340px] md:max-w-[400px] lg:max-w-[580px] md:min-h-[480px]">
            {/* Top Section with Image */}
            <div className="relative h-full md:h-[283px] w-full rounded-lg overflow-hidden">
                <Image
                    src={img}
                    alt="E-Book Cover"
                    objectFit="cover"
                    className="rounded-lg border-gray-border border-[1px]"
                    width={614}
                    height={218}
                />
            </div>

            {/* Content Section */}
            <div className="mt-6 flex flex-col h-full justify-between flex-grow">
                <div>
                    <h3 className="md:text-3xl text-lg font-bold text-left text-white">
                        {title}
                    </h3>
                    <p className="text-white text-sm md:text-lg mt-2  font-light text-justify ">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default TrainingCard;