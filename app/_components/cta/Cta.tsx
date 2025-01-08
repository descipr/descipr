"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Whatsapp } from "@/utils";

const Cta = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

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
                    "We’ve received your request. Our mentor will connect with you within the next 24 hours!"
                );
                setFullName("");
                setPhoneNumber("");
                setIsOpen(false);
            } else {
                alert("Failed to send request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form", error);
        }
    };

    const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    };

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        if (/^\d*$/.test(input) && input.length <= 10) {
            setPhoneNumber(input);
        }
    };

    return (
        <section className="flex flex-col gap-8 items-center mt-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl">
                <p className="text-white px-2 py-2 bg-gray-400/30 rounded-xl"> <span className="text-blue-Textprimary">1,000+ </span> People Have Taken Their First Step. </p>
                <h2 className="text-xl md:text-5xl font-bold text-white">
                    Are You Ready to Elevate Your
                    <span className=" text-blue-Textprimary">
                        {" "}
                        AI Journey?
                    </span>
                </h2>

            </div>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            
                <Link
                    href="https://chat.whatsapp.com/GtjjkGQhgbo9WesLk12Wuj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 space-x-2 text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-md"
                >
                    <span className="font-medium">Join Our Community</span>
                    <Image
                        src={Whatsapp}
                        alt="WhatsApp icon"
                        width={24}
                        height={24}
                        priority
                    />
                </Link>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-2xl font-bold mb-4">
                            Book Your Free 30-Minute Career Guidance Session
                        </h3>
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
                                    maxLength={10}
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
        </section>
    );
};

export default Cta;
