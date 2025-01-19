import { Phone } from "@/utils";
import Link from "next/link";
import Image from "next/image";

const CorporateCta = () => {
    return (
        <div className="text-center max-w-3xl px-4 mt-4 md:mt-8 mx-auto flex flex-col gap-4 items-center">
            <div>
                <h1 className="text-3xl md:text-[56px] font-bold text-center text-white leading-[120%]">
                    Stay Ahead with{" "}
                    <span className="text-blue-Textprimary font-Plus-jakarta">
                        Descipr!{" "}
                    </span>

                </h1>
            </div>

            <p className="text-sm md:text-xl leading-[150%] text-white text-center font-light">
                Stay up-to-date with the latest in AI and receive exclusive insights from our experts.
            </p>
            <div className="flex items-center justify-center gap-4 mx-auto">
                <Link
                    className="flex items-center px-3 py-2 md:px-4 md:py-2 space-x-2 text-sm md:text-base text-black bg-blue-400 hover:bg-blue-500 rounded-lg md:rounded-xl shadow-md" href="https://wa.me/9148398744"
                    target="_blank"
                    rel="noopener noreferrer"                >
                    <span className="font-medium">Book a Discovery call</span>
                    <Image src={Phone} alt="Phone icon" width={20} height={20} priority />
                </Link>
            </div>
        </div>
    );
}

export default CorporateCta;