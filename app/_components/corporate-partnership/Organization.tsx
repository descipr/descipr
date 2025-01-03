import { logoImages } from "@/constants";
import Carousel from "../workshopsection/Carousel";
import CarouselLogo from "./CarouselLogo";

const Organization = () => {
    return (
        <section className="section-style mx-auto items-center">
            <h1 className="heading text-white leading-[120%]">
                Organizations Who{" "}
                <span className="text-blue-Textprimary font-Plus-jakarta">
                    Trust Us{" "}
                </span>
                in
            </h1>

            <CarouselLogo images={logoImages}  />
        </section>
    );
}

export default Organization;