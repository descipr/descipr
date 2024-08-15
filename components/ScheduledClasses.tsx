import { ScheduledClassData } from "@/constants";
import ScheduledClassCard from "./ui/ScheduledClassCard";

const ScheduledClasses = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex justify-center">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {ScheduledClassData.map((card, index) => (
          <ScheduledClassCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            para={card.para}
            date={card.date}
            background={card.background}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduledClasses;
