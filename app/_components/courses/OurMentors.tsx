import MentorsCardSection from "./MentorsCardSection";


const OurMentors = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white heading">
          Guidance Sessions with our <span className="text-blue-Textprimary">Mentors</span>
        </h2>
      </div>
      <MentorsCardSection />
    </section>
  );
};

export default OurMentors;
