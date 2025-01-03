'use client'
import { useEffect, useState } from "react";
import DesktopDiffernceCard from "./DesktopDiffernceCard";
import MobileDifferenceSection from "./MobileDifferenceSection";

const DifferenceCardSection = () => {

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
        <section className="max-w-7xl mx-auto overflow-hidden">

            {isDesktop ? <DesktopDiffernceCard /> : <MobileDifferenceSection />}
        </section>
    );
}

export default DifferenceCardSection;