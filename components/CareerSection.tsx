import CareerCardSection from "./ui/CareerCardSection";
import TakeQuiz from "./ui/TakeQuix";

const CareerSection = () => {
  return (
    <section className="section-style  items-center">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="heading text-white">

          Take <span className="text-blue-Textprimary font-Plus-jakarta">
            your career to newer
          </span> heights with us
        </h2>
      </div>
      <CareerCardSection />
      <TakeQuiz />
    </section>
  );
};

export default CareerSection;
