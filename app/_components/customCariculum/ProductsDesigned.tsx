import { ProductcardData } from "@/constants";
import ProductCard from "../corporate-partnership/ProductCard";


const ProductsDesigned = () => {
    return (
        <section className="section-style overflow-hidden max-w-7xl items-center justify-center" id="products">
            <h2 className="heading text-blue-Textprimary">
                Products designed <span className="text-white">for all your needs</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {ProductcardData.map((src, index) => (
                    <ProductCard title={src.title} points={src.points} image={src.image} buttonText={src.buttonText} link={src.link} />
                ))}
            </div>
        </section>
    );
}

export default ProductsDesigned;