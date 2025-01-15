import React, { memo } from "react";

const FillBtn = (props) => {
  const {
    icon,
    text,
    className = "",
    handleOnClick,
    disabled = false,
    type = "button",
    variant = "primary", 
  } = props;

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const buttonClasses = `
    fillBtn 
    ${variantClasses[variant] || variantClasses.primary} 
    font-bold px-4 py-2 rounded-lg 
    shadow-md 
    transition-transform 
    transform hover:scale-105 active:scale-95
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      onClick={handleOnClick}
      disabled={disabled}
      type={type}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default memo(FillBtn);
