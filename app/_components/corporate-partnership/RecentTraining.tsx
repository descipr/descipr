'use client';

import { useEffect, useState } from "react";
import DesktopTraining from "./DesktopTraining";
import MobileTraining from "./MobileTraining";
import { StaticImageData } from "next/image";

interface TrainingData {
  title: string;
  description: string;
  img: StaticImageData; // Update the type if `img` is not a string
}

interface RecentTrainingProps {
  trainingData: TrainingData[];
}

const RecentTraining = ({ trainingData }: RecentTrainingProps) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
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
        <p className="text-white text-sm md:text-base font-light">
          Empowering diverse teams at leading organizations to harness the transformative power of AI.
        </p>
      </div>

      {/* Pass the trainingData prop to DesktopTraining and MobileTraining */}
      {isDesktop ? (
        <DesktopTraining trainingData={trainingData} />
      ) : (
        <MobileTraining trainingData={trainingData} />
      )}
    </section>
  );
};

export default RecentTraining;
