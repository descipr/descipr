import { ProductcardI } from "@/constants";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const ProductCard: React.FC<ProductcardI> = ({ title, points, image, buttonText, link }) => {
    return (
        <div className="flex flex-col h-full overflow-hidden rounded-md shadow-md bg-transparent border-[#4D4D4D] border-[1px] transition-colors cursor-pointer">
            {/* Image Section */}
            <div className="relative h-56 w-full">
                <Image
                    src={image}
                    alt={title}
                    width={399}
                    height={250}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between flex-1">
                {/* Title */}
                <h2 className="text-base md:text-xl font-semibold mb-4 text-white">{title}</h2>

                {/* Points */}
                <ul className="flex-1 mb-4 space-y-2 text-white pl-4">
                    {points.map((point, index) => (
                        <li key={index} className="text-white text-sm md:text-base list-disc">
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Download Button */}
                <a
                    href={link} // Link to the PDF file
                    download // Makes the file downloadable
                    className="bg-white text-black-primary px-4 py-2 rounded-lg text-center transition flex items-center justify-center gap-2"
                >
                    {buttonText}
                    <span>
                        <FaArrowRight className="h-6 w-6 text-[#EE4924] transition-all" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
