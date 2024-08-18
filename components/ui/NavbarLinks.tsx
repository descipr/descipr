"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarLinks: React.FC = () => {
  const pathname = usePathname();

  const handleNavigation = (hash: string) => {
    if (pathname !== "/") {
      window.location.href = `/${hash}`;
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <ul className="flex flex-row items-center gap-8">
      <li
        className="text-md hover:text-gray-500 text-white font-Plus-jakarta font-normal cursor-pointer"
        onClick={() => handleNavigation("#fellowship")}
      >
        Fellowship
      </li>
      <li
        className="text-md hover:text-gray-500 text-white font-Plus-jakarta font-normal cursor-pointer"
        onClick={() => handleNavigation("#reviews")}
      >
        Reviews
      </li>
      <li
        className="text-md hover:text-gray-500 text-white font-Plus-jakarta font-normal cursor-pointer"
        onClick={() => handleNavigation("#blogs")}
      >
        Blogs
      </li>
      <li
        className="text-md hover:text-gray-500 text-white font-Plus-jakarta font-normal cursor-pointer"
        onClick={() => handleNavigation("#podcast")}
      >
        Podcast
      </li>
    </ul>
  );
};

export default NavbarLinks;
