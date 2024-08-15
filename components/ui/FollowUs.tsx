import React from "react";
import Image from "next/image";
import { socialLinks } from "@/constants";


const FollowUs: React.FC = () => {
  return (
    <div className="flex flex-col text-left text-white space-y-4">
      <h4 className="font-semibold text-md">Follow Us</h4>
      <ul className="flex flex-col space-y-2">
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-xs font-light"
          >
            <Image
              src={link.iconSrc}
              alt={`${link.label} icon`}
              width={15}
              height={15}
              priority
            />
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUs;
