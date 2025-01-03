import { trainingRecent } from "@/constants";
import { useState } from "react";
import TrainingCard from "./TrainingCard";


const DesktopTraining = () => {

    const [current, setCurrent] = useState(0);
    const pdfsPerPage = 2;
    const totalPages = Math.ceil(trainingRecent.length / pdfsPerPage);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % totalPages);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + totalPages) % totalPages);
    return (
        <div className="text-white h-full">
            <div className="container mx-auto text-center flex flex-col ">
                <div className="relative overflow-hidden h-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out items-stretch justify-center"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <div
                                key={pageIndex}
                                className="flex gap-4 h-full justify-center w-full"
                            >
                                {trainingRecent
                                    .slice(pageIndex * pdfsPerPage, (pageIndex + 1) * pdfsPerPage)
                                    .map((src, index) => (

                                       <TrainingCard key={index} {...src} />

                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        onClick={prevSlide}
                        className="border-[1px] border-gray-500 p-2 rounded-lg"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        className="border-[1px] border-gray-500 p-2 rounded-lg"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DesktopTraining;