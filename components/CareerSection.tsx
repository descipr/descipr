import CareerCardSection from "./ui/CareerCardSection";
import TakeQuiz from "./ui/TakeQuix";

const CareerSection = () => {
  return (
    <section className="section-style  items-center">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white text-center text-3xl md:text-4xl font-bold">
          Take your career to newer heights with us
        </h2>
      </div>
      <CareerCardSection />
      <TakeQuiz />
    </section>
  );
};

export default CareerSection;
