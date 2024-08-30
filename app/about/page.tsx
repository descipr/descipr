import AboutUs from "@/components/AboutUs";
import OurMentors from "@/components/OurMentors";
import OurTrainers from "@/components/OurTrainers";
import HorizontalLine from "@/components/ui/HorizontalLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the team that is empowering the next generation of AI professionals with holistic training and cutting-edge skills for tomorrow's challenges",
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
