"use client";

import { NavItem, navlinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const NavbarLinks: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname(); // Get the current pathname

  const toggleDropdown = (title: string | null) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  // Function to generate the correct href based on current path
  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : `/${href}`;
    }
    return href;
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      window.location.href = `/${href}`; // Force redirect to home page with the hash
    }
  };

  return (
    <div className="flex flex-row items-center space-x-4 xl:space-x-8 text-white">
      {navlinks.map((item: NavItem) => (
        <div key={item.title} className="relative group">
          <div
            onClick={() => item.subItems && toggleDropdown(item.title)}
            className="flex items-center px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:text-green-500"
          >
            {item.subItems ? (
              <span className="flex items-center space-x-2">
                <span>{item.title}</span>
                <svg
                  className={`h-4 w-4 ml-2 transition-transform duration-300 ${
                    openDropdown === item.title ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            ) : (
              <Link
                href={getHref(item.href)}
                onClick={() => handleLinkClick(item.href)}
                className="flex items-center space-x-2"
              >
                <span>{item.title}</span>
              </Link>
            )}
          </div>
          {item.subItems && (
            <div
              className={`w-[300px] absolute top-full left-0 bg-black-primary text-white shadow-md rounded-md mt-2 transition-all duration-300 ${
                openDropdown === item.title ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ul className="">
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      href={getHref(subItem.href)}
                      onClick={() => handleLinkClick(subItem.href)}
                      className="block px-4 py-2 hover:text-green-500"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;
