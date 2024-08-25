import React from 'react';
import TestimonialCarousel from './ui/TestimonialCarousel';

const Testimonials: React.FC = () => {
  return (
    <section className="section-style overflow-hidden" id='reviews'>
      <h2 className="heading text-white">
        Hear it from <span className="text-blue-Textprimary">our learners</span>
      </h2>
      <TestimonialCarousel />
    </section>
  );
};

export default Testimonials;
