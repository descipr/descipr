import ScheduledClasses from "./ScheduleClasses";


const LiveSchedule = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="heading text-white">
          Live <span className="text-blue-Textprimary">Class Schedule</span>
        </h2>
      </div>

      <ScheduledClasses />
    </section>
  );
};

export default LiveSchedule;
