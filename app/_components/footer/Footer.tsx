import React from "react";
import LogoLink from "../navbar/LogoLink";
import Fellowship from "./Fellowship";
import Company from "./Company";
import FollowUs from "./FollowUs";
import WorkshopFooter from "./WorkshopFooter";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto flex flex-col  items-center sm:items-start py-4 md:py-8 space-y-4 md:space-y-8 px-8">
      {/* Logo Section */}

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full">
          <LogoLink />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full items-start justify-center">
          <Fellowship />
          <Company />
          <FollowUs />
          <WorkshopFooter />
        </div>
      </div>


      {/* Footer Bottom */}
      <div className="flex w-full md:w-auto justify-center md:justify-start space-x-4">
        <p className="text-xs font-light text-gray-500">
          © 2024 — All Rights Reserved
        </p>
        <p className="text-xs font-light text-gray-500">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
