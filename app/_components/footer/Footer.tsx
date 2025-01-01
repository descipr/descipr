import React from "react";
import LogoLink from "../navbar/LogoLink";
import Fellowship from "./Fellowship";
import Company from "./Company";
import FollowUs from "./FollowUs";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto flex flex-col items-center sm:items-start  justify-between py-4 md:py-8 space-y-4 md:space-y-16 px-8">
      <div className="flex flex-col sm:flex-row items-left items-center sm:items-start justify-between w-full space-y-4 md:space-y-0">
        <LogoLink />
        <div className="flex flex-col sm:flex-row align-left sm:items-center justify-between gap-8 md:gap-16 lg:gap-24 ">
          <div className="flex gap-4 md:gap-16 lg:gap-24">
            <Fellowship />
            <Company />
            <FollowUs />
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-auto space-x-4">
        <p className="text-xs font-light text-gray-500">
          © 2024 — All Rights Reserved
        </p>
        <p className="text-xs font-light text-gray-500">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
