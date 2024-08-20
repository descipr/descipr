"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constants";

const MobileTestimonialCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Function to update content width
  const updateWidth = () => {
    if (carouselRef.current) {
      // Calculate the total width of the content
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      let calculatedContentWidth = totalWidth - visibleWidth;

      // If the calculated width is 0 or negative, fallback to testimonials.length * 320
      if (calculatedContentWidth <= 0) {
        calculatedContentWidth = testimonials.length * 320 - visibleWidth;
      }

      setContentWidth(calculatedContentWidth > 0 ? calculatedContentWidth : 0);
    }
  };

  useEffect(() => {
    // Initial call to set content width
    updateWidth();

    // Update width on resize
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={carouselRef}
          className="flex space-x-4" // Added space between items
          drag="x"
          dragConstraints={{ right: 0, left: -contentWidth }}
          style={{ touchAction: "pan-x" }} // Ensures it is draggable on touch devices
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-80 flex-shrink-0">
              <TestimonialCard
                profilePic={testimonial.profilePic}
                name={testimonial.name}
                position={testimonial.position}
                testimonial={testimonial.testimonial}
                linkedinUrl={testimonial.linkedinUrl}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MobileTestimonialCarousel;
