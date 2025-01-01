import CareerCardSection from "./CareerCardSection";
import TakeQuiz from "./TakeQuiz";


const CareerSection = () => {
    return (
        <section className="section-style  items-center">
            <div className="flex flex-col items-center space-y-1">
                <h2 className="heading text-white">
                    Take your career to <span className="text-blue-Textprimary">newer heights with us</span>
                </h2>
            </div>
            <CareerCardSection />
            <TakeQuiz />
        </section>
    );
};

export default CareerSection;
