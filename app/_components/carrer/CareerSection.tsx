import { CardData } from "@/constants";
import CareerCardSection from "./CareerCardSection";


const CareerSection = ({ title_white, title_blue, cardData }: {
    title_white: string,
    title_blue: string,
    cardData: CardData[]
}) => {
    return (
        <section className="section-style  items-center  mx-auto">
            <div className="flex flex-col items-center space-y-1">
                <h2 className="heading text-white">
                    {title_white} <span className="text-blue-Textprimary">{title_blue}</span>
                </h2>
            </div>
            <CareerCardSection cardData={cardData} />
           
        </section>
    );
};

export default CareerSection;
