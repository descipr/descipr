import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FaChevronDown } from "react-icons/fa6";
import { NavItem, navlinks } from "@/constants";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Toggle the dropdown menu
  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <div
      className={`fixed flex flex-col z-50 top-0 right-0 w-full bg-black-primary text-white transition-transform duration-300 h-screen transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-4xl" icon={faXmark} />
      </button>

      {/* Navigation Links */}
      <ul className="space-y-4 mt-16 items-center">
        {navlinks.map((item: NavItem) => (
          <li key={item.title} className="relative w-full border-b-[1px] border-gray-300">
            <div
              onClick={() => item.subItems && toggleDropdown(item.title)}
              className="flex items-center px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:text-green-500"
            >
              {item.subItems ? (
                <span className="flex items-center space-x-2">
                  <span>{item.title}</span>
                  <FaChevronDown
                    className={`h-4 w-4 ml-2 transition-transform duration-300 ${
                      openDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                </span>
              ) : (
                <Link href={item.href} onClick={onClose} className="flex items-center space-x-2">
                  <span>{item.title}</span>
                </Link>
              )}
            </div>

            {item.subItems && openDropdown === item.title && (
              <ul className="ml-6 mt-2 space-y-2">
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 hover:text-green-500"
                      onClick={onClose}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileDrawer;
