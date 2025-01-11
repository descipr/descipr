import { careerCardData } from "@/constants";
import CareerSection from "./_components/carrer/CareerSection";
import CourseSection from "./_components/courseSection/CourseSection";
import Cta from "./_components/cta/Cta";
import CustomCurriculum from "./_components/customCariculum/CustomCurriculum";
import DesciprFellowSection from "./_components/dechiprFellowship/DesciprFellowSection";
import Exclusive from "./_components/exclusive/Exclusive";
import Hero from "./_components/hero/Hero";
import HorizontalLine from "./_components/HorizontalLine";
import Testimonials from "./_components/testimonial/Testimonials";
import WorkshopSection from "./_components/workshopsection/WorkshopSection";
import TakeQuiz from "./_components/carrer/TakeQuiz";

const Home: React.FC = () => {
  return (
    <>
      <main className="relative flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-2">
        <div className="max-w-6xl w-full flex flex-col gap-4 items-center">
          <Hero />
          <CourseSection />
          <HorizontalLine />
          <WorkshopSection />
          <HorizontalLine />
          <CustomCurriculum />
          <HorizontalLine />
          <Exclusive />
          <HorizontalLine />
          <Testimonials />
          <HorizontalLine />
          <DesciprFellowSection />
          <HorizontalLine />
          <CareerSection title_white="Take your career to" title_blue="newer heights with us" cardData={careerCardData} />
          <TakeQuiz />
          <Cta />
        </div>
      </main>
    </>
  );
};

export default Home;
