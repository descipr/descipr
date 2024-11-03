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
  BonusWorkshop__sql,
  insightsDataSql,
  workshopData_sql,
  workshopData_vec,
} from "@/constants";

import {
  Atul_profile,
  BackgroundLogo,
  Big_Query_sql_workshop,
  home_credit_company_logo,
  HsbcLogo,
  largeLanguageModel,
  OpenAi,
  promtEngineering,
  python,
  sammer_dubey_profile,
  sql,
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

const Workshop_sql = () => {
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
              Design an AI Powered Search System with{" "}
              <span className="text-blue-Textprimary font-Plus-jakarta">
                Vector Databases - A Hands-On Workshop
              </span>
            </h1>
            <p className="text-sm md:text-base text-white font-light">
              In this workshop you'll gain hands-on insights into building
              efficient search and retrieval systems powered by vector
              databases. This session dives into the role of vector databases in
              modern AI applications and how they enable fast, semantic search
              capabilities beyond traditional keyword search. Join us to
              discover how to unlock new possibilities in AI with advanced,
              AI-powered search systems!
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
              date="November 17, 2024"
              cost="₹0"
              image={sammer_dubey_profile}
              name="Sameer Dubey"
              linkedinLink="https://www.linkedin.com/in/sameerz/"
              qualification="Manager, Data Science"
              company={home_credit_company_logo}
            />
          </div>
        </section>
        <HorizontalLine />
        <LearningWorkShop data={workshopData_vec} />
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

export default Workshop_sql;
