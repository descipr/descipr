import BonusWorkshop from "@/components/BonusWorkshop";
import CallNow from "@/components/CallNow";
import ContactForm from "@/components/ContactForm";
import DesciprDifference from "@/components/DesciprDifference";
import LearningWorkShop from "@/components/LearningWorkShop";
import LiveSessionSection from "@/components/LiveSessionSection";
import Testimonials from "@/components/Testimonials";
import HorizontalLine from "@/components/ui/HorizontalLine";
import WebinarIntended from "@/components/ui/WebinarIntended";
import { BackgroundLogo, workshopInsights } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Workshop",
  description: "Descipr | Workshop",
};
const EnrollNow = () => {
  return (
    <>
      <section className="max-w-7xl w-full flex flex-col space-y-8 items-center mx-auto overflow-x-hidden">
        <section className="relative container mx-auto px-4 py-4 md:py-8 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:space-x-4 md:space-x-16 sm:space-y-8 md:space-y-16">
          <Image
            src={BackgroundLogo}
            alt="background image"
            width={480}
            className="absolute top-0 right-0 -z-10"
            priority
          />
          <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left sm:w-1/2">
            <h3 className="text-2xl md:text-5xl font-bold text-white font-Plus-jakarta">
              Ace Data Science & AI Interviews – A hands-on Workshop
            </h3>
            <p className="text-sm md:text-base text-white font-light">
              Master your data science and AI interview with more than just
              technical know-how. Achieving success requires outcome-focused
              projects, strategic problem-solving, and effective communication.
              Join this exclusive workshop, led by a seasoned hiring manager, to
              gain a competitive advantage. Improve your interview techniques
              and boost your confidence to secure your dream job in data science
              and AI.
            </p>

            <Image
              src={workshopInsights}
              alt="course insights"
              width={630}
              height={250}
              className="rounded-lg pt-4"
              priority
            />
          </div>

          <div className="flex justify-center items-center sm:w-1/2  pt-16 md:pt-0">
            <ContactForm />
          </div>
        </section>
        <HorizontalLine />
        <LearningWorkShop />
        <HorizontalLine />
        <WebinarIntended />
        <HorizontalLine />
        <DesciprDifference />
        <HorizontalLine />
        <Testimonials />
        <HorizontalLine />
        <LiveSessionSection />
        <HorizontalLine />
        <BonusWorkshop />
        <HorizontalLine />
        <CallNow />
      </section>
    </>
  );
};

export default EnrollNow;
