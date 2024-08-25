import { BonusWorkshop } from "@/constants";
import { useEffect, useState } from "react";
import IntendedForCard from "../IntendedForCard";
import MobileIntendedSection from "./MobileIntendedSection";

const BonusCardSection = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="container py-6">
      {isDesktop ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {BonusWorkshop.map((card, index) => (
            <IntendedForCard
              key={card.id}
              title={card.title}
              description={card.description}
              background={card.background}
              id={0}
            />
          ))}
        </div>
      ) : (
        <MobileIntendedSection />
      )}
    </div>
  );
};

export default BonusCardSection;
