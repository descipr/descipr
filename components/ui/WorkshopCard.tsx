"use client";
import { useEffect } from "react";
import Image from "next/image";
import { HsbcLogo, linkedIcon, linkedin, Tanoy_profile, TanoyDewanjee } from "@/utils";
import Link from "next/link";

const WorkshopCard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_OpRb7xG2aaZA22");
    script.async = true;

    const container = document.getElementById("razorpay-button-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md lg:max-w-sm relative flex flex-col space-y-4">
      <Image
        src={Tanoy_profile}
        alt="Dashboard with analytics"
        className="w-full h-40 object-cover"
      />

      <div className="flex flex-col justify-between items-left  font-Plus-jakarta px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col"> 
            <h3 className=" text-base lg:text-lg text-black-primary font-semibold">
              Tanoy Dewanjee
            </h3>
            <span className="text-sm lg:text-base text-black-primary font-light mb-2 ">
              AVP, Data Science
            </span>
            <Image
                src={HsbcLogo}
                alt="Linked in icon"
                width={108}
                height={27}
                className=""
              />
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/tanoydewanjee/">
              <Image
                src={linkedin}
                alt="Linked in icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 pb-4">
        <div className="flex flex-col justify-between items-left  font-Plus-jakarta">
          <h3 className="text-gray-600 text-sm font-normal ">
            Next Workshop on
          </h3>
          <span className="text-lg md:text-xl lg:text-lg text-black-primary font-medium">
            September 28, 2024
          </span>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-sm font-normal">Price</p>
          <div className="flex gap-2 items-end">
            <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900">
              ₹199
            </h1>
          </div>
        </div>

        <form
          id="razorpay-button-container"
          className="mt-4 text-center sm:text-left"
        >
          {/* Razorpay button script will be appended here */}
        </form>
      </div>
    </div>
  );
};

export default WorkshopCard;
