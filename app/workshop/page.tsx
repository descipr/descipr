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
            <h1 className="text-3xl md:text-5xl font-bold text-center sm:text-left text-white font-Plus-jakarta">
              Ace Data Science & AI{" "}
              <span className="text-blue-Textprimary font-Plus-jakarta">
                Interviews – A hands-on Workshop
              </span>
            </h1>
            <p className="text-sm md:text-base text-white font-light">
              Master your data science and AI interview beyond technical skills.
              This exclusive workshop, led by an experienced hiring manager,
              will help you develop outcome-driven projects, strategic
              problem-solving, and strong communication. Enhance your interview
              techniques and boost your confidence to land your dream job.
            </p>

            <Image
              src={workshopInsights}
              alt="course insights"
              width={730}
              height={250}
              className="rounded-lg pt-4"
              priority
            />
          </div>

          <div className="flex justify-center items-center w-full px-2 sm:w-1/2  pt-16 md:pt-0">
            <ContactForm />
          </div>
        </section>
        <HorizontalLine />
        <LearningWorkShop />
        <HorizontalLine />
        <WebinarIntended />
        <HorizontalLine />
        <BonusWorkshop />
        <HorizontalLine />
        <DesciprDifference />
        <HorizontalLine />
        <Testimonials />
        <HorizontalLine />
        <LiveSessionSection />
        <HorizontalLine />
        <CallNow />
      </section>
    </>
  );
};

export default EnrollNow;
