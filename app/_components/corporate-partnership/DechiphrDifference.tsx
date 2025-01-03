import DifferenceCardSection from "./DifferenceCardSection";

const DechiphrDifference = () => {
    return (
        <section className="section-style  items-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="heading text-white">
                    Experience the <span className="text-blue-Textprimary">Descipr Difference</span>
                </h2>
                <p className="text-white text-sm md:text-base font-light">See how our programs transform teams and individuals.</p>
            </div>
            <DifferenceCardSection />

        </section>
    );
}

export default DechiphrDifference;