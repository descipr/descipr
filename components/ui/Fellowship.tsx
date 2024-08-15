
import { fellowshipList } from "@/constants";
import React from "react";

const Fellowship: React.FC = () => {
  return (
    <div className="flex flex-col text-left text-white space-y-4">
      <h4 className="font-semibold text-md">Fellowships</h4>
      <ul className="flex flex-col space-y-2">
        {fellowshipList.map((item, index) => (
          <li key={index} className="text-xs font-light">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fellowship;
