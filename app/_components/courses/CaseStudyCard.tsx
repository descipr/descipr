import Image, { StaticImageData } from "next/image";

const CaseStudyCard = ({ img, title, para }: {
    img: StaticImageData,
    title: string,
    para: string
}) => {
    return (
        <div className="flex flex-col h-full overflow-hidden rounded-md shadow-md bg-transparent border-[#4D4D4D]  border-[1px] transition-colors cursor-pointer p-4">
            <div className="relative h-56 w-full">
                <Image
                    src={img}
                    alt={title}
                    width={399}
                    height={250}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            <div className="flex flex-col justify-between pt-2">
                <h3 className="mb-2 text-xl font-bold text-white md:text-2xl font-Plus-jakarta">
                    {title}
                </h3>
                <div className="flex items-center text-white">
                    <span className="text-sm font-normal md:text-base font-Plus-jakarta">
                        {para}
                    </span>

                </div>
            </div>

        </div>
    );
}

export default CaseStudyCard;