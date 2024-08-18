"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import LearningCardSection from "./ui/LearningCardSection";
import Image from "next/image";
import { DownloadIcon } from "@/utils";
import { LearningCardData } from "@/constants";

interface LearningProps {
  courseDetails: LearningCardData[];
}

const Learning = ({ courseDetails }: LearningProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleDownloadClick = () => {
    setTimeout(() => {
      setIsOpen(true);
    }, 2000); 
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, phoneNumber }),
      });

      if (res.ok) {
        alert("Your callback request has been sent!");
        setFullName("");
        setPhoneNumber("");
        setIsOpen(false);

      
        const link = document.createElement("a");
        link.href = "/Business_analyst_cariculum.pdf";
        link.download = "Business_analyst_cariculum.pdf";
        link.click();
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
    setPhoneNumber(e.target.value);
  };

  return (
    <section className="section-style">
      <h2 className="heading text-white">
        What Will<span className="text-blue-Textprimary"> You Learn</span>
      </h2>
      <LearningCardSection courseDetails={courseDetails} />
      <button
        onClick={handleDownloadClick}
        className="flex items-center px-4 py-2 space-x-2 text-white bg-[#ACC2FA] hover:bg-blue-500 rounded-xl shadow-md box-shadow"
      >
        <span className="flex items-center justify-center text-black-primary text-center font-bold text-lg">
          Download Detailed Curriculum and Course Timelines
        </span>
        <Image
          src={DownloadIcon}
          alt="Download icon"
          width={24}
          height={24}
          priority
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4">Download Carriculum</h3>
            <p className="text-gray-600 mb-4">
              Please fill in your details to download the PDF. The download will
              start automatically after submission.
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
    </section>
  );
};

export default Learning;
