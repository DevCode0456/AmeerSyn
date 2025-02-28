import React, { memo } from "react";

const SubHeading = ({ headingText, className = "", }) => {
  return (
    <React.Fragment>
      <h4
        className={`
          text-lg md:text-xl lg:text-2xl 
          font-medium 
          text-text
          bg-clip-text 
          p-2 rounded-md 
          hover:scale-105 transition-transform duration-300 
          ${className}`}
      >
        {headingText}
      </h4>
    </React.Fragment>
  );
};

export default memo(SubHeading);
