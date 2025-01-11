import { desciprDiffernceCardData } from "@/constants";
import DifferenceCard from "./DifferenceCard";

const DesktopDiffernceCard = () => {
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2  w-full">
            {desciprDiffernceCardData.map((card, index) => (
                <DifferenceCard
                    key={index}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default DesktopDiffernceCard;
