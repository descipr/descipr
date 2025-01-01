"use client";

import { customCarriculum, workshops } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import CustomCarriculumCard from "./CustomCarriculumCard";

const CustomCurriculum = () => {
    return (
        <div className="section-style overflow-hidden">
            <h2 className="heading text-white">
                Custom <span className="text-blue-Textprimary">Curriculum</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Corporate Partnership Card */}
                {customCarriculum.map((src, index) => (
                    <CustomCarriculumCard img={src.img} title={src.title} para={src.para} />
                ))}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 bg-blue-600 rounded-lg overflow-hidden">
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-full">
                        <Image
                            src={coparate_partnership}
                            alt="Corporate Partnership"
                            className="object-cover w-full h-full"
                            layout="fill"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-8">
                        <h3 className="text-xl md:text-4xl font-bold text-white mb-4">
                            Corporate Partnership
                        </h3>
                        <p className="mb-6 text-white font-light text-sm md:text-xl">
                            Get you workforce AI ready in 1 month!
                        </p>
                        <button
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
                            <span className="text-sm font-semibold md:text-lg">
                                Explore More
                            </span>
                            <FaArrowRight className="h-6 w-6 text-[#EE4924] hover:text-white transition-all" />
                        </button>
                    </div>
                </div> */}

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#EE4924] rounded-lg overflow-hidden">
                    <div className="relative w-full h-[200px] sm:h-[300px] md:h-full">
                        <Image
                            src={campus_connect}
                            alt="Campus Connect"
                            className="object-cover w-full h-full"
                            layout="fill"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-8">
                        <h3 className="text-xl md:text-4xl font-bold text-white mb-4">
                            Campus Connect
                        </h3>
                        <p className="mb-6 text-white font-light text-sm md:text-xl">
                            Join us in shaping the next generation of AI Innovators and
                            Leaders!
                        </p>
                        <button
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
                            <span className="text-sm font-semibold md:text-lg">
                                Explore More
                            </span>
                            <FaArrowRight className="h-6 w-6 text-[#EE4924] hover:text-white transition-all" />
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CustomCurriculum;
