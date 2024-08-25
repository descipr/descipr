'use client'
import BonusCardSection from "./ui/BonusCardSection";

const BonusWorkshop = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="heading text-white">
          Bonus with this Workshop
        </h2>
        <BonusCardSection />
      </div>
    </section>
  );
};

export default BonusWorkshop;
