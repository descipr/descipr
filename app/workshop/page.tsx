
import { BonusWorkshopData, workshopData } from "@/constants";
import { insightsData } from "@/constants";
import {
  Analitical,
  BackgroundLogo,
  googleBitQuery,
  HsbcLogo,
  MsExcel,
  sql,
  Tanoy_profile,
} from "@/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import HorizontalLine from "../_components/HorizontalLine";
import Testimonials from "../_components/testimonial/Testimonials";
import LiveSessionSection from "../_components/courses/LiveSessionSection";
import InsightsGrid from "../_components/workshop/InsightsGrid";
import WorkshopCard from "../_components/workshop/WorkshopCard";
import LearningWorkShop from "../_components/workshop/LearningWorkShop";
import WorkshopToolSection from "../_components/workshop/WorkshopToolSection";
import WebinarIntended from "../_components/workshop/WebinarIntended";
import BonusWorkshop from "../_components/workshop/BonusWorkshop";
import CallNow from "../_components/workshop/CallNow";
import WorkshopFaq from "../_components/workshop/WorkshopFaq";

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "Enhance your data science and AI interview skills with this exclusive workshop, guided by a seasoned hiring manager. It will refine your strategic problem-solving abilities and strengthen your communication skills.",
};

const tools = [
  { src: sql, alt: "Image 1", title: "Sql" },
  { src: googleBitQuery, alt: "Image 1", title: "Google Big Query" },
  { src: MsExcel, alt: "Image 1", title: "Ms Excel" },
  { src: Analitical, alt: "Image 1", title: "Analytical Frameworks" },
];
const Workshop = () => {
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

            {/* <Image
              src={workshopInsights}
              alt="course insights"
              width={730}
              height={250}
              className="rounded-lg pt-4"
              priority
            /> */}

            <InsightsGrid data={insightsData} />
          </div>

          <div className="flex justify-center items-center w-full px-2 sm:w-1/2  pt-16 md:pt-0">
            <WorkshopCard
              date="TBA"
              cost="₹0"
              image={Tanoy_profile}
              name="Tanoy Dewanjee "
              linkedinLink="https://www.linkedin.com/in/tanoydewanjee/" qualification="AVP, Decision Science" company={HsbcLogo}            />
          </div>
        </section>
        <HorizontalLine />
        <LearningWorkShop data={workshopData} />
        <HorizontalLine />
        <WorkshopToolSection tools={tools} />
        <HorizontalLine />
        <WebinarIntended />
        <HorizontalLine />
        <BonusWorkshop data={BonusWorkshopData} />
        <HorizontalLine />
        <Testimonials />
        <HorizontalLine />
        <LiveSessionSection />
        <HorizontalLine />
        <CallNow />
        <HorizontalLine />
        <WorkshopFaq />
      </section>
    </>
  );
};

export default Workshop;
