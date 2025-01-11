import { CorporateCareerCardData, trainingRecent } from "@/constants";
import CareerSection from "../_components/carrer/CareerSection";
import CustomizedTraining from "../_components/corporate-partnership/CustomizedTraining";
import Hero from "../_components/corporate-partnership/Hero";
import Organization from "../_components/corporate-partnership/Organization";
import ProductsDesigned from "../_components/customCariculum/ProductsDesigned";
import HorizontalLine from "../_components/HorizontalLine";
import RecentTraining from "../_components/corporate-partnership/RecentTraining";
import DechiphrDifference from "../_components/corporate-partnership/DechiphrDifference";
import Testimonials from "../_components/testimonial/Testimonials";

import CorporateCta from "../_components/corporate-partnership/CorporateCta";

const CorporatePartnership = () => {
    return (
        <section className="flex flex-col sm:space-y-8 md:space-y-16 items-center justify-center mx-auto w-full overflow-hidden">
            <Hero />
            <Organization />
            <HorizontalLine />
            <ProductsDesigned />
            <HorizontalLine />
            <CustomizedTraining />
            <HorizontalLine />
            <CareerSection title_white="Cut Down Your" title_blue="AI implementation timeline by 90%" cardData={CorporateCareerCardData} />
            <HorizontalLine />
            <RecentTraining trainingData={trainingRecent} />
            <HorizontalLine />
            <DechiphrDifference />
            <HorizontalLine />
            <Testimonials />
            <HorizontalLine />
            <CorporateCta />
        </section>
    );
}

export default CorporatePartnership;