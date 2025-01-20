'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Phone } from "@/utils";
import Link from "next/link";
import Image from "next/image";

const CorporateCta = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        if (/^\d*$/.test(input) && input.length <= 10) {
            setPhoneNumber(input);
        }
    };

    const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    };

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
                alert("Our team will get in touch with you shortly.");
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
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center px-3 py-2 md:px-4 md:py-2 space-x-2 text-sm md:text-base text-black bg-blue-400 hover:bg-blue-500 rounded-lg md:rounded-xl shadow-md"
                >
                    <span className="font-medium">Book a Discovery call</span>
                    <Image src={Phone} alt="Phone icon" width={20} height={20} priority />
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-2xl font-bold mb-4">Book a Free Call</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 text-black-primary">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
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
                            <div className="mb-4 text-black-primary">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
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

export default CorporateCta;
