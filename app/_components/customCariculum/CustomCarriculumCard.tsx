import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type CardProps = {
    img: StaticImageData,
    title: string,
    para: string,
    slug: string,

}

const CustomCarriculumCard = ({ img, title, para, slug }: CardProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-gradient-custom rounded-lg overflow-hidden gap-4 border-[1px] border-gray-border">
            <div className="relative w-full h-[200px] sm:h-[300px] md:w-[303px] md:h-[350px]">
                <Image
                    src={img}
                    alt="Corporate Partnership"
                    className="object-cover w-full h-full"
                    layout="fill"
                />
            </div>
            <div className="flex flex-col justify-between p-6 md:p-8">

                <div className="flex flex-col justify-between">
                    <h3 className="text-xl md:text-[26px] font-bold text-white mb-4">
                        {title}
                    </h3>
                    <p className="mb-6 text-white font-light text-sm md:text-base">
                        {para}
                    </p>
                </div>

                <Link
                    href={slug}
                    className="flex items-center justify-center w-full px-5 py-3 space-x-4 text-black bg-white cursor-pointer border-[1px] rounded-xl border-black-primary transition-colors hover:text-white"
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                            "#ACC2FA"; // Hover button background
                        (e.currentTarget as HTMLElement).style.color = "white"; // Hover text color
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                            "white"; // Reset button background
                        (e.currentTarget as HTMLElement).style.color = "black"; // Reset text color
                    }}
                >
                    <span className="text-sm font-semibold md:text-base">
                        Explore More
                    </span>
                    <FaArrowRight className="h-6 w-6 text-[#EE4924] hover:text-white transition-all" />
                </Link >
            </div>
        </div>
    );
}

export default CustomCarriculumCard;