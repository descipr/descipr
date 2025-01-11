import MentorsCardSection from "./MentorsCardSection";


const AboutSectionMentors = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white heading">Our Mentors</h2>
      </div>
      <MentorsCardSection />
    </section>
  );
};

export default AboutSectionMentors;
