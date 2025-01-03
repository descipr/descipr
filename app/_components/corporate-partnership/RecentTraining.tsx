'use client'
import { useEffect, useState } from "react";
import DesktopTraining from "./DesktopTraining";
import MobileTraining from "./MobileTraining";

const RecentTraining = () => {
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

            <div className="flex flex-col items-center gap-2">
                <h2 className="heading text-white">
                    Our <span className="text-blue-Textprimary">Recent Trainings</span>
                </h2>
                <p className="text-white text-sm md:text-base font-light">Empowering diverse teams at leading organizations to harness the transformative power of AI.</p>
            </div>

            {isDesktop ? <DesktopTraining /> : <MobileTraining />}
        </section>
    );
}

export default RecentTraining;