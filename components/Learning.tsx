import LearningCardSection from "./ui/LearningCardSection";
import Image from "next/image";
import { DownloadIcon } from "@/utils";
import { LearningCardData } from "@/constants";

interface LearningProps {
  courseDetails: LearningCardData[];
}

const Learning = ({ courseDetails }: LearningProps) => {
  return (
    <section className="section-style">
      <h2 className="heading text-white">
        What Will<span className="text-blue-Textprimary"> You Learn</span>
      </h2>
      <LearningCardSection courseDetails={courseDetails} />
      <a
        href="/Business_analyst_cariculum.pdf"
        download
        className="flex items-center px-4 py-2 space-x-2 text-white bg-[#ACC2FA] hover:bg-blue-500 rounded-xl shadow-md box-shadow"
      >
        <span className="flex items-center justify-center text-black-primary text-center font-bold text-lg">
          Download Detailed Curriculum and Course Timelines
        </span>
        <Image
          src={DownloadIcon}
          alt="WhatsApp icon"
          width={24}
          height={24}
          priority
        />
      </a>
    </section>
  );
};

export default Learning;
