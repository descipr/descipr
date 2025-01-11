
import {
  BonusWorkshop__sql,
  insightsDataSql,
  workshopData_sql,
} from "@/constants";

import {
  Atul_profile,
  BackgroundLogo,
  Big_Query_sql_workshop,
  HsbcLogo,
  sql,
} from "@/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import InsightsGrid from "../_components/workshop/InsightsGrid";
import WorkshopCard from "../_components/workshop/WorkshopCard";
import HorizontalLine from "../_components/HorizontalLine";
import LearningWorkShop from "../_components/workshop/LearningWorkShop";
import WorkshopToolSection from "../_components/workshop/WorkshopToolSection";
import WebinarIntended from "../_components/workshop/WebinarIntended";
import BonusWorkshop from "../_components/workshop/BonusWorkshop";
import Testimonials from "../_components/testimonial/Testimonials";
import LiveSessionSection from "../_components/courses/LiveSessionSection";
import CallNow from "../_components/workshop/CallNow";
import WorkshopFaq from "../_components/workshop/WorkshopFaq";

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "Enhance your data science and AI interview skills with this exclusive workshop, guided by a seasoned hiring manager. It will refine your strategic problem-solving abilities and strengthen your communication skills.",
};
const tools = [
  { src: sql, alt: "Image 1", title: "Sql" },
  { src: Big_Query_sql_workshop, alt: "Image 1", title: "Google Big Query " },
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
              Master SQL Foundations: Detect E-commerce{" "}
              <span className="text-blue-Textprimary font-Plus-jakarta">
                Return Fraud - A hands on workshop
              </span>
            </h1>
            <p className="text-sm md:text-base text-white font-light">
              Unlock the power of SQL by diving into real-world applications!
              This workshop led by an Industry expert is designed to equip you
              with essential SQL skills while tackling a relevant business
              problem: E-commerce Return Fraud Detection. Whether you're new to
              SQL or looking to strengthen your foundation, this hands-on
              session offers the perfect blend of theory and practice.
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
              date="November 9, 2024"
              cost="₹0"
              image={Atul_profile}
              name="Atul Anand"
              linkedinLink="https://www.linkedin.com/in/atul-anand-6075bb58/"
              qualification="AVP, Business Analytics"
              company={HsbcLogo}
            />
          </div>
        </section>
        <HorizontalLine />
        <LearningWorkShop data={workshopData_sql} />
        <HorizontalLine />
        <WorkshopToolSection tools={tools} />
        <HorizontalLine />
        <WebinarIntended />
        <HorizontalLine />
        <BonusWorkshop data={BonusWorkshop__sql} />
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
