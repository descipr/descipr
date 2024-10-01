import { insightsData } from "@/constants";
import Insight from "./ui/Insight";

const InsightsGrid = () => {
  return (
    <section className="py-10 max-w-2xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-2  gap-6">
          {insightsData.map((feature) => (
            <Insight
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsGrid;
