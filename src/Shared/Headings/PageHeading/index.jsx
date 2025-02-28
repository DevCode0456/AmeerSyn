import React, { memo } from "react";

const PageHeading = ({ headingText, className = "",  }) => {
  return (
    <React.Fragment>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient bg-clip-text 
    text-primary
          tracking-tight capitalize           hover:scale-105 transition-transform duration-300 
 ${className}`}
      >
        {headingText}
      </h2>
    </React.Fragment>
  );
};

export default memo(PageHeading);
