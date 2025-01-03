import { corporate_hero_bg } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full h-[75vh] flex flex-col items-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={corporate_hero_bg} // Path to your image in the public folder
                    alt="Background Image"
                    layout="fill" // Ensures the image covers the section
                    objectFit="cover" // Makes it behave like a background image
                    priority={true} // Optimizes loading for the background
                />
            </div>

            {/* Content */}
            <div className="text-center max-w-3xl px-4 mt-4 md:mt-8 mx-auto flex flex-col gap-4">
                <div>
                    <h1 className="text-3xl md:text-[56px] font-bold text-center text-white leading-[120%]">
                        Get Your Team{" "}
                        <span className="text-blue-Textprimary font-Plus-jakarta">
                            AI Ready{" "}
                        </span>
                        in
                    </h1>
                    <h1 className="text-3xl md:text-[56px] font-bold text-center leading-[120%]">
                        one month!
                    </h1>
                </div>

                <p className="text-sm md:text-xl leading-[150%] text-white text-center font-light">
                    Expert-led upskilling for actionable results in your field!
                </p>
                <div className="flex items-center justify-center gap-4 mx-auto w-full max-w-2xl">
                    <Link
                        //   onClick={() => setIsOpen(true)}
                        className="flex items-center justify-center px-6 py-2 w-full mx-auto md:px-8 md:py-4 space-x-2  text-black-primary bg-blue-Textprimary  rounded-lg md:rounded-xl text-xs md:text-lg font-semibold" href=""        >
                        {" "}
                        Aspiring Programs
                    </Link>
                    <button
                        //   onClick={() => setIsOpen(true)}
                        className="flex items-center justify-center px-6 py-2 w-full mx-auto md:px-8 md:py-4 space-x-2 text-white border-[1px] border-blue-button bg-transparent  rounded-lg md:rounded-xl text-xs md:text-lg font-semibold"
                    >
                        Explore Workshops
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
