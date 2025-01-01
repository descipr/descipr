"use client";
import React, { useEffect, useState } from "react";
import DesktopPDFCarousel from "./DesktopPDFCarousel";
import MobilePDFCarousel from "./MobilePDFCarousel";

const Exclusive = () => {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <section className="section-style overflow-hidden">
            <h2 className="heading text-white">
                Descipr <span className="text-blue-Textprimary">Exclusives</span>
            </h2>
            {isDesktop ? <DesktopPDFCarousel /> : <MobilePDFCarousel />}
        </section>
    );
};

export default Exclusive;
