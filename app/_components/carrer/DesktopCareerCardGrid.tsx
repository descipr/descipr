"use client";
import React from "react";
import { CardData, careerCardData } from "@/constants";
import CareerCard from "./CareerCard";

const DesktopCareerCardGrid = ({ cardData }: {
  cardData: CardData[]
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <CareerCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopCareerCardGrid;
