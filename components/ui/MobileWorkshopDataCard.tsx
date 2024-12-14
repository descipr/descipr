"use client";
import { HsbcLogo, workshop_data_tanoy } from "@/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import WorkshopDataCard from "./WorkshopDatacards";

const workshops = [
  {
    live: "Live",
    date: "Sun , Dec 15, 10:00 AM",
    time: "10:30 PM",
    title: "Business Insights with Python",
    duration: "90 Min",
    mentorName: "Tanoy Dewanjee",
    mentorPhoto: workshop_data_tanoy,
    designation: "AVP, Decision Science",
    logo: HsbcLogo,
    signups: 50,
  },
  {
    live: "On Demand",
    date: "Sun , Nov 17, 11:00 AM",
    time: "10:30 PM",
    title: "Design an AI Powered Search System with Vector Databases",
    duration: "90 Min",
    mentorName: "Tanoy Dewanjee",
    mentorPhoto: workshop_data_tanoy,
    designation: "AVP, Decision Science",
    logo: HsbcLogo,
    signups: 40,
  },
  {
    live: "On Demand",
    date: "Sat , Nov 09, 11:00 AM",
    time: "10:30 PM",
    title: "Master SQL Foundations: Detect E-commerce Return Fraud",
    duration: "90 Min",
    mentorName: "Atul Anand",
    mentorPhoto: workshop_data_tanoy,
    designation: "AVP, Decision Science",
    logo: HsbcLogo,
    signups: 100,
  },
  {
    live: "On Demand",
    date: "Sun , Oct 27, 10:00 AM",
    time: "10:30 PM",
    title: "Mastering AI: Outsmarting Banking Fraud with LLMs",
    duration: "90 Min",
    mentorName: "Tanoy Dewanjee",
    mentorPhoto: workshop_data_tanoy,
    designation: "AVP, Decision Science",
    logo: HsbcLogo,
    signups: 100,
  },
  {
    live: "On Demand",
    date: "Sat , Nov 09, 11:00 AM",
    time: "10:30 PM",
    title: "Master SQL Foundations: Detect E-commerce Return Fraud",
    duration: "90 Min",
    mentorName: "Atul Anand",
    mentorPhoto: workshop_data_tanoy,
    designation: "AVP, Decision Science",
    logo: HsbcLogo,
    signups: 120,
  },
];

const MobileWorkshopDataCard = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
      console.log(width);
    }
  }, []);
  return (
    <motion.div ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {workshops.map((workshop, i) => (
          <div key={i} className="flex-shrink-0 w-[90%] sm:w-full px-2">
            <WorkshopDataCard key={i} {...workshop} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileWorkshopDataCard;
