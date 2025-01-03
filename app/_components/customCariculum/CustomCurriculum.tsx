"use client";

import { customCarriculum, workshops } from "@/constants";
import React from "react";
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
                    <CustomCarriculumCard img={src.img} title={src.title} para={src.para} slug={src.slug} />
                ))}
            </div>
        </div>
    );
};

export default CustomCurriculum;
