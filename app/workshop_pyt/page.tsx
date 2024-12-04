import BonusWorkshop from "@/components/BonusWorkshop";
import CallNow from "@/components/CallNow";
import InsightsGrid from "@/components/InsightsGrid";
import LearningWorkShop from "@/components/LearningWorkShop";
import LiveSessionSection from "@/components/LiveSessionSection";
import Testimonials from "@/components/Testimonials";
import HorizontalLine from "@/components/ui/HorizontalLine";
import WebinarIntended from "@/components/ui/WebinarIntended";
import WorkshopCard from "@/components/ui/WorkshopCard";
import WorkshopFaq from "@/components/WorkshopFaq";
import WorkshopToolSection from "@/components/WorkshopToolsection";
import {
  BonusWorkshop__llm,
  insightsDataSql,
  workshopData_pyt,
  workshopData_vec,
} from "@/constants";

import {
  BackgroundLogo,
  HsbcLogo,
  largeLanguageModel,
  OpenAi,
  promtEngineering,
  python,
  Tanoy_profile,
} from "@/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "Enhance your data science and AI interview skills with this exclusive workshop, guided by a seasoned hiring manager. It will refine your strategic problem-solving abilities and strengthen your communication skills.",
};
const tools = [
  { src: OpenAi, alt: "Image 1", title: "OpenAI" },
  { src: python, alt: "Image 1", title: "Python" },
  { src: promtEngineering, alt: "Image 1", title: "Vector Databases" },
  { src: largeLanguageModel, alt: "Image 1", title: "LLM" },
];

const Workshop_pyt = () => {
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
              Business Insights with Python: Hands-on{" "}
              <span className="text-blue-Textprimary font-Plus-jakarta">
                Workshop on Data Analysis
              </span>
            </h1>
            <p className="text-sm md:text-base text-white font-light">
              Unlock the power of Python to transform raw data into actionable
              business insights in this hands-on workshop. Learn to analyze
              trends, create visualizations, and make data-driven decisions with
              real-world examples. Perfect for beginners and professionals eager
              to leverage Python for business analytics.
            </p>

            {/* <Image
              src={workshopInsights}
              alt="course insights"
              width={730}
              height={250}
              className="rounded-lg pt-4"
              priority
            /> */}

            <InsightsGrid data={insightsDataSql} />
          </div>

          <div className="flex justify-center items-center w-full px-2 sm:w-1/2  pt-16 md:pt-0">
            <WorkshopCard
              date="December 15, 2024"
              cost="₹0"
              image={Tanoy_profile}
              name="Tanoy Dewanjee"
              linkedinLink="https://www.linkedin.com/in/tanoydewanjee/"
              qualification="AVP, Decision Science"
              company={HsbcLogo}
            />
          </div>
        </section>
        <HorizontalLine />
        <LearningWorkShop data={workshopData_pyt} />
        <HorizontalLine />
        <WorkshopToolSection tools={tools} />
        <HorizontalLine />
        <WebinarIntended />
        <HorizontalLine />
        <BonusWorkshop data={BonusWorkshop__llm} />
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

export default Workshop_pyt;
