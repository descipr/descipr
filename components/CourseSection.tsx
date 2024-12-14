import React from "react";
import { courses } from "@/constants";
import CourseCard from "./ui/CourseCard";

const CourseSection: React.FC = () => {
  return (
    <section className="section-style overflow-hidden">
      <h2 className="heading text-white">
        Fellow<span className="text-blue-Textprimary">ships</span>
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            imageSrc={course.imageSrc}
            title={course.title}
            para={course.para}
            bg={course.bg}
            button={course.button}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
