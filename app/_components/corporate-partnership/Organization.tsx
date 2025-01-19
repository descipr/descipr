import { logoImages } from "@/constants";
import CarouselLogo from "./CarouselLogo";

const Organization = () => {
    return (
        <section className="section-style mx-auto items-center overflow-hidden">
            <h1 className="heading text-white leading-[120%]">
            Institutions who{" "}
                <span className="text-blue-Textprimary font-Plus-jakarta">
                    Trust Us{" "}
                </span>
            </h1>

            <CarouselLogo images={logoImages}  />
        </section>
    );
}

export default Organization;