import HorizontalLine from "./ui/HorizontalLine";
import LearnSection from "./ui/LearnSection";
import ToolsSection from "./ui/ToolsSection";

const LearningAndTools = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white heading">Concepts You Will Learn</h2>
      </div>

      <LearnSection />
      <ToolsSection />
    </section>
  );
};

export default LearningAndTools;
