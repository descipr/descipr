'use client'
import { useEffect, useState } from "react";
import DesktopDiffernceCard from "./DesktopDiffernceCard";
import MobileDifferenceSection from "./MobileDifferenceSection";

const DifferenceCardSection = () => {
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsDesktop(width >= 1024); // Adjust breakpoint for desktop
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="section-style overflow-hidden">
            {isDesktop ? <DesktopDiffernceCard /> : <MobileDifferenceSection />}
        </section>
    );
};

export default DifferenceCardSection;
