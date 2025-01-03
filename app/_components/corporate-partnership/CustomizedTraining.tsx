import { steps } from "@/constants";
import Link from "next/link";

const CustomizedTraining = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-4 md:py-8 flex flex-col gap-4 items-center">
            {/* Heading */}
            <div className="text-center space-y-4 mb-10">
                <h2 className="heading text-white">
                    Get <span className="text-blue-Textprimary">customized training</span> in just
                    10 days!
                </h2>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center text-center space-y-2"
                    >
                        {/* Step Number */}
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFF0ED] text-[#EE4924] text-lg md:text-3xl font-bold">
                            {step.id}
                        </div>
                        {/* Step Title */}
                        <h3 className="text-lg md:text-2xl font-bold text-white">{step.title}</h3>
                        {/* Step Description */}
                        <p className="text-sm md:text-base text-white font-light">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center mx-auto mt-8">
                <Link
                    //   onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center px-6 py-2 w-full mx-auto md:px-8 md:py-4 space-x-2  text-black-primary bg-blue-Textprimary  rounded-lg md:rounded-xl text-xs md:text-lg font-semibold" href=""        >
                    {" "}
                    Let's Discuss
                </Link>
            </div>
        </section>
    );
};

export default CustomizedTraining;
