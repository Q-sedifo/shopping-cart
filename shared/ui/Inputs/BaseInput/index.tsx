import React from "react";

interface IBaseInputProps {
  className?: string;
  placeholder?: string;
}

export const BaseInput: React.FC<IBaseInputProps> = ({ className, placeholder }) => {
  return (
    <input
      className={`w-[100px] !py-[2px] !px-[5px] border border-gray-500 rounded-md focus:outline-none ${className}`}
      placeholder={placeholder}
    />
  )
}