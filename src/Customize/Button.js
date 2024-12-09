import React from "react";

const CustomButton = ({
  text = "Get in Touch", 
  bgColor = "bg-[#013D29]", 
  textColor = "text-white", 
  borderColor = "#013D29", 
  textSize = "text-lg", 
  padding = "px-4 py-2", 
  borderRadius = "rounded-full", 
  onClick, 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgColor} 
        ${textColor} 
        ${textSize} 
        ${padding} 
        ${borderRadius} 
        mx-20 
        active:bg-white 
        active:text-${bgColor.slice(1)} 
        border 
        border-${borderColor.slice(1)} 
        transition 
        duration-200 
        focus:outline-none
      `}
    >
      {text}
    </button>
  );
};

export default CustomButton;
