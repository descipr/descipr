'use client'
import { steps } from "@/constants";
import { ChangeEvent, FormEvent, useState } from "react";


const CustomizedTraining = () => {
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

        // Validate phone number
        if (!/^\d{10}$/.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        try {
            // Simulate API call to save user info
            const response = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName, phoneNumber }),
            });

            if (response.ok) {
                // Trigger PDF download

                alert(
                    "Our team will get in touch with you shortly."
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


    return (
        <section className="max-w-7xl mx-auto px-4 py-4 md:py-8 flex flex-col gap-4 items-center">
            {/* Heading */}
            <div className="text-center space-y-4 mb-10">
                <h2 className="heading text-white">
                    Get <span className="text-blue-Textprimary">customized training</span> in just
                    10 days!
                </h2>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center text-center space-y-2"
                    >
                        {/* Step Number */}
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFF0ED] text-[#EE4924] text-lg md:text-3xl font-bold">
                            {step.id}
                        </div>
                        {/* Step Title */}
                        <h3 className="text-lg md:text-2xl font-bold text-white">{step.title}</h3>
                        {/* Step Description */}
                        <p className="text-sm md:text-base text-white font-light">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center mx-auto mt-8">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center justify-center px-6 py-2 w-full mx-auto md:px-8 md:py-4 space-x-2  text-black-primary bg-blue-Textprimary  rounded-lg md:rounded-xl text-xs md:text-lg font-semibold">
                    {" "}
                    Let's Discuss
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                        <h3 className="text-2xl font-bold mb-4">Download Curriculum</h3>
                        <p className="text-gray-600 mb-4">
                            Please fill in your details to download the PDF. The download will
                            start automatically after submission.
                        </p>
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
        </section>
    );
};

export default CustomizedTraining;
