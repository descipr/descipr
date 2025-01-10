"use client";
import { useEffect } from "react";
import { CourseDetail } from "@/constants";
import Image from "next/image";

interface PriceCardProps {
  courseDetails: CourseDetail;
}

const PriceCard = ({ courseDetails }: PriceCardProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute(
      "data-payment_button_id",
      courseDetails.razorPay.paymentButtonId
    );
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
  }, [courseDetails.razorPay.paymentButtonId]);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl overflow-hidden md:max-w-sm lg:max-w-md relative">
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 bg-green-500 text-white text-sm font-bold py-2 px-4 rounded-md">
        {courseDetails.discount}
      </div>

      {/* Image Section */}
      <Image
        src={courseDetails.priceCardImage}
        alt="Dashboard with analytics"
        className="w-full h-40 sm:h-56 object-cover"
      />

      {/* Content Section */}
      <div className="p-4">
        {/* Cohort Information */}
        <div className="flex flex-col font-Plus-jakarta">
          <h3 className="text-gray-600 text-base font-normal mb-1">
            Cohort starts on
          </h3>
          <span className="text-lg sm:text-xl text-black-primary font-medium">
            {courseDetails.dateOfStart}
          </span>
        </div>

        {/* Price Section */}
        <div className="mt-6">
          <p className="text-gray-500 text-base font-normal mb-1">Price</p>
          <div className="flex gap-4 items-end">
            <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
              {courseDetails.cost}
            </h1>
            <span className="text-gray-500 text-base sm:text-lg line-through">
              {courseDetails.actualcost}
            </span>
          </div>
        </div>

        {/* Razorpay Button */}
        <form id="razorpay-button-container" className="mt-8 text-left">
          {/* Razorpay button script will be appended here */}
        </form>
      </div>
    </div>
  );
};

export default PriceCard;
