import TrainerSection from "./TrainerSection";

const OurTrainers = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white text-center text-2xl md:text-4xl font-bold">
          Learn from Our Trainers
        </h2>
      </div>
      <TrainerSection />
    </section>
  );
};

export default OurTrainers;
