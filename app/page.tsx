import CareerSection from "@/components/CareerSection";
import CourseSection from "@/components/CourseSection";
import DesciprFellowSection from "@/components/DesciprFellowSection";
import Hero from "@/components/Hero";
import Cta from "@/components/ui/Cta";
import CustomCurriculum from "@/components/ui/CustomCurriculum";
import Exclusive from "@/components/ui/Exclusive";
import HorizontalLine from "@/components/ui/HorizontalLine";
import WorkshopSection from "@/components/ui/WorkshopSection";

const Home: React.FC = () => {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-2">
        <div className="max-w-7xl w-full flex flex-col space-y-8 items-center">
          <Hero />
          <HorizontalLine />
          <CourseSection />
          <HorizontalLine />
          <WorkshopSection />
          <HorizontalLine />
          <CustomCurriculum />
          <HorizontalLine />
          <Exclusive />
          <HorizontalLine />
          <DesciprFellowSection />
          <HorizontalLine />
          <CareerSection />
          <HorizontalLine />
          <Cta />
        </div>
      </main>
    </>
  );
};

export default Home;
