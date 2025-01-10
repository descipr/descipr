"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";

interface PDFCardProps {
  title: string;
  description?: string;
  downloadLink: string;
  img: StaticImageData;
}

const PDFCard: React.FC<PDFCardProps> = ({ title, downloadLink, img }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleDownloadClick = () => {
    setIsOpen(true);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const anchor = document.createElement("a");
    anchor.href = downloadLink;
    anchor.download = downloadLink;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

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

  return (
    <section className="text-white bg-black rounded-xl shadow-lg flex flex-col w-full max-w-[400px] md:max-w-[480px] lg:max-w-[680px] ">
      {/* Image Section */}
      <div className="relative w-full pb-[56.25%] rounded-xl ">
        <Image
          src={img}
          alt="E-Book Cover"
          fill
          className="rounded-xl"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col h-full p-4">
        {/* Title */}
        <div>
          <h3 className="text-base md:text-lg font-medium text-left text-gray-300">
            {title}
          </h3>
        </div>

        {/* Download Button */}
        <div className="mt-4 flex items-start">
          <button
            onClick={handleDownloadClick}
            className="flex items-center justify-center w-full max-w-xs px-4 py-3 text-white hover:text-black bg-transparent border border-white rounded-xl transition-colors duration-300 group"
          >
            <span className="text-sm md:text-base font-semibold">
              Download
            </span>
            <FaArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 text-[#EE4924] transition-transform duration-300 transform group-hover:translate-x-1" />
          </button>
        </div>
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

export default PDFCard;
