import { corporate_hero_bg } from "@/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Hero = ({ text, blueText, heading, img }: { text: string, blueText: string, heading: string, img: StaticImageData }) => {
    return (
        <section className="relative w-full h-full md:h-[75vh] flex flex-col items-center  text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 opacity-35 md:opacity-100">
                <Image
                    src={img} // Path to your image in the public folder
                    alt="Background Image"
                    layout="fill" // Ensures the image covers the section
                    objectFit="cover" // Makes it behave like a background image
                    priority={true} // Optimizes loading for the background
                />
            </div>

            {/* Content */}
            <div className="text-center max-w-3xl px-4 mt-4 md:mt-32 mx-auto flex flex-col gap-4">
                <div>
                    <h1 className="text-3xl md:text-[56px] font-bold text-center text-white leading-[120%]">
                        {heading}{" "}
                        <span className="text-blue-Textprimary font-Plus-jakarta">
                            {blueText}{" "}
                        </span>
                    </h1>

                </div>
                <p className="text-sm md:text-2xl text-center">
                    {text}
                </p >
                <div className="flex items-center justify-center gap-4 mx-auto mt-4" >
                    <Link
                        //   onClick={() => setIsOpen(true)}
                        className="flex items-center justify-center px-6 py-3 w-full mx-auto md:px-8  space-x-2  text-black-primary bg-blue-Textprimary  rounded-lg md:rounded-xl text-xs md:text-lg font-semibold" href="#products"        >
                        {" "}
                        Explore Programs
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Hero;
