import { companyList } from "@/constants";
import React from "react";

const Company: React.FC = () => {
  return (
    <div className="flex flex-col text-left text-white space-y-4">
      <h4 className="font-semibold text-md">Company</h4>
      <ul className="flex flex-col space-y-2">
        {companyList.map((item, index) => (
          <li key={index} className="text-xs font-light">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
