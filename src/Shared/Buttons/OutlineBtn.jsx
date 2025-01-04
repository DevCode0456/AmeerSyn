import React, { memo } from "react";

const OutlineBtn = (props) => {
  const { className = "", text, handleOnClick, disabled = false } = props;

  const buttonClasses = `
  py-2 
  px-4 
  border-2 
  font-bold 
  shadow-md 
  rounded-lg 
  text-blue-500 
  border-blue-500 
  hover:text-white 
  hover:bg-blue-500 
  transition-transform 
  transform hover:scale-105 active:scale-95 
  outlineBtn 
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default memo(OutlineBtn);
