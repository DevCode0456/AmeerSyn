import React, { memo } from "react";

const PageHeading = ({ headingText, className = "", style = {} }) => {
  return (
    <React.Fragment>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient bg-clip-text 
          text-transparent bg-gradient-to-r from-blue-500 to-green-500 
          tracking-tight capitalize ${className}`}
        style={style}
      >
        {headingText}
      </h2>
    </React.Fragment>
  );
};

export default memo(PageHeading);
