import React from 'react'
import WorkshopDataCard from './WorkshopDatacards'
import { HsbcLogo, workshop_data_tanoy } from '@/utils';

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

const DesktopWorkshopDataCard = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map((workshop, index) => (
          <WorkshopDataCard key={index} {...workshop} />
        ))}
      </div>
  )
}

export default DesktopWorkshopDataCard
