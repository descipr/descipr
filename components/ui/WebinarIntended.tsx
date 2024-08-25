'use client'
import IntendedCardSection from "../IntendedCardSection";

const WebinarIntended = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="heading text-white">
          Who this Webinar is intended for
        </h2>
      </div>

      <IntendedCardSection />
    </section>
  );
};

export default WebinarIntended;
