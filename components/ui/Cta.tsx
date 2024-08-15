"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Whatsapp } from "@/utils";

const Cta = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;
      const res = await fetch(`${base_url}/api/user`, {
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
      <div className="flex flex-col items-center justify-center space-y-1 text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          Ready to <span className="text-blue-primary">Take the Next Step</span>
        </h2>
        <h2 className="text-2xl md:text-5xl font-bold text-white">
          in Your AI Journey?
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 space-x-2 text-black bg-blue-400 hover:bg-blue-500 rounded-xl box-shadow"
        >
          <span className="font-medium">Request a call back</span>
          <Image src={Phone} alt="Phone icon" width={24} height={24} priority />
        </button>
        <Link
          href="https://wa.me/918179102369"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 space-x-2 text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-md box-shadow"
        >
          <span className="font-medium">Message us on</span>
          <Image src={Whatsapp} alt="WhatsApp icon" width={24} height={24} priority />
        </Link>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4">Request a Call Back</h3>
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

export default Cta;