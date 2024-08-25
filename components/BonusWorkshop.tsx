'use client'
import BonusCardSection from "./ui/BonusCardSection";

const BonusWorkshop = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white text-center text-3xl md:text-4xl font-bold">
          Bonus with this Workshop
        </h2>
        <BonusCardSection />
      </div>
    </section>
  );
};

export default BonusWorkshop;
