import { CorporateCareerCardData } from "@/constants";
import CareerSection from "../_components/carrer/CareerSection";
import CustomizedTraining from "../_components/corporate-partnership/CustomizedTraining";
import Hero from "../_components/corporate-partnership/Hero";
import Organization from "../_components/corporate-partnership/Organization";
import ProductsDesigned from "../_components/customCariculum/ProductsDesigned";
import HorizontalLine from "../_components/HorizontalLine";
import RecentTraining from "../_components/corporate-partnership/RecentTraining";
import DechiphrDifference from "../_components/corporate-partnership/DechiphrDifference";
import Testimonials from "../_components/testimonial/Testimonials";
import TakeQuiz from "../_components/carrer/TakeQuiz";
import Cta from "../_components/cta/Cta";


const CampusConnect = () => {
    return (
        <section className="flex flex-col sm:space-y-8 md:space-y-16 items-center justify-center mx-auto">
            <Hero />
            <Organization />
            <HorizontalLine />
            <ProductsDesigned />
            <HorizontalLine />
            <CustomizedTraining />
            <HorizontalLine />
            <CareerSection title_white="Cut Down Your" title_blue="AI implementation timeline by 90%" cardData={CorporateCareerCardData} />
            <HorizontalLine />
            <RecentTraining />
            <HorizontalLine />
            <DechiphrDifference />
            <HorizontalLine />
            <Testimonials />
            <section className="max-w-7xl w-full">
                <TakeQuiz />
            </section>
            <HorizontalLine />

            <Cta />

        </section>
    );
}

export default CampusConnect;