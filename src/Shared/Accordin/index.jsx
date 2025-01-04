import "./style.css";
import React, { memo } from "react";
import { MdContactPhone } from "react-icons/md";

const CustomCard = ({ icon, title, description, color }) => {
  return (
    <div
      className="relative max-w-xs flex-grow rounded-lg p-3 text-center shadow-lg"
      style={{ backgroundColor: color }}
    >
      <div
        className="absolute top-0 left-0 h-full w-8 bg-current shadow-md"
        style={{ clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" }}
      ></div>
      <div className="relative flex flex-col justify-between overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
        <div className="p-6">
          <div className="mb-4 flex justify-center">
            {icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
                {icon}
              </div>
            )}
          </div>
          <h5 className="mb-2 text-lg font-semibold text-gray-800">{title}</h5>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div
          className="absolute bottom-[-20px] right-[-20px] flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md transition-transform duration-300 hover:scale-110"
          style={{ backgroundColor: color }}
        >
          <MdContactPhone size={24} />
        </div>
      </div>
    </div>
  );
};

export default memo(CustomCard);