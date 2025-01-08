import { caseStudy } from "@/constants";
import CaseStudyCard from "./CaseStudyCard";

interface casestudyprops {
    casestudy: caseStudy[]
}
const CaseStudy = ({ casestudy }: casestudyprops) => {
    return (
        <section className="section-style overflow-hidden">
            <h2 className="heading text-white">
                Foundation <span className="text-blue-Textprimary">Case Studies</span>
            </h2>

            <div className="grid gap-6 grid-col-1 sm:grid-cols-2 lg:grid-cols-4">
                {casestudy.map((course, index) => (
                    <CaseStudyCard
                        key={index}
                        img={course.img}
                        title={course.title}
                        para={course.para}

                    />
                ))}
            </div>
        </section>
    );
}

export default CaseStudy;