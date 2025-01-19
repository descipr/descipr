
import { Metadata } from "next";
import AboutUs from "../_components/about/AboutUs";      
import HorizontalLine from "../_components/HorizontalLine";
import OurTrainers from "../_components/about/OurTrainers";
import OurMentors from "../_components/courses/OurMentors";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the team that is empowering the next generation of AI professionals with holistic training and cutting-edge skills for tomorrow's challenges",
};

const About = () => {
  return (
    <section className="max-w-7xl w-full flex flex-col space-y-8 items-center mx-auto">
      <AboutUs />
      <HorizontalLine />
      <OurTrainers />
      <HorizontalLine />
      <OurMentors />
    </section>
  );
};

export default About;
