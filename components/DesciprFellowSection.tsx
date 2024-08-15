import FellowshipSection from "./ui/FellowshipSection";

const DesciprFellowSection = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col space-y-1 items-center justify-center">
        <h2 className="heading text-white">
          Become a <span className="text-blue-Textprimary">Descipr Fellow</span>{" "}
          and
        </h2>
        <h2 className="heading text-white">Experience the difference</h2>
      </div>

      <FellowshipSection />
    </section>
  );
};

export default DesciprFellowSection;
