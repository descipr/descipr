'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { ProductcardI } from "@/constants";

const ProductCard: React.FC<ProductcardI> = ({ title, points, image, buttonText, link }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isCall, setIsCall] = useState<boolean>(false);

    const handleDownloadClick = () => {
        setIsOpen(true);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.download = link;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        try {
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, phoneNumber }),
            });

            if (response.ok) {
                alert(
                    "Thank you for downloading the curriculum. Our team will get in touch with you shortly."
                );
                setFullName("");
                setPhoneNumber("");
                setIsOpen(false);
            } else {
                alert("Failed to send request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form", error);
            alert("An error occurred. Please try again later.");
        }
    };

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        if (/^\d*$/.test(input) && input.length <= 10) {
            setPhoneNumber(input);
        }
    };

    const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    };

    return (
        <div className="flex flex-col h-full overflow-hidden rounded-md shadow-md bg-transparent border-[#4D4D4D] border-[1px] transition-colors cursor-pointer">
            {/* Image Section */}
            <div className="relative h-56 w-full">
                <Image
                    src={image}
                    alt={title}
                    width={399}
                    height={250}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between flex-1">
                {/* Title */}
                <h2 className="text-base md:text-xl font-semibold mb-4 text-white">{title}</h2>

                {/* Points */}
                <ul className="flex-1 mb-4 space-y-2 text-white pl-4">
                    {points.map((point, index) => (
                        <li key={index} className="text-white text-sm md:text-base list-disc">
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Conditional Button Rendering */}
                {buttonText === "Let's Connect" ? (
                    <button
                        onClick={() => { setIsOpen(true); setIsCall(true) }}
                        className="bg-white text-black-primary px-4 py-2 rounded-lg text-center transition flex items-center justify-center gap-2"
                    >
                        Lets Connect
                        <span className="font-medium"> <FaArrowRight className="h-6 w-6 text-[#EE4924] transition-all" /></span>

                    </button>
                ) : (
                    <button
                        onClick={handleDownloadClick}
                        className="bg-white text-black-primary px-4 py-2 rounded-lg text-center transition flex items-center justify-center gap-2"
                    >
                        {buttonText}
                        <span>
                            <FaArrowRight className="h-6 w-6 text-[#EE4924] transition-all" />
                        </span>
                    </button>
                )}
            </div>

            {/* Modal for Form */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-2xl font-bold mb-4">{isCall ? "Book a free call" : "Download Curriculum"}</h3>
                        <p className="text-gray-600 mb-4">
                            {!isCall && "Please fill in your details to download the PDF. The download will start automatically after submission."}
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={handleFullNameChange}
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
