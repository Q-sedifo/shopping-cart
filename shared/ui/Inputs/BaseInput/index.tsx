import React from "react";
import cn from "classnames";

interface IBaseInputProps {
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export const BaseInput: React.FC<IBaseInputProps> = ({ className, placeholder, onChange }) => {
  return (
    <input
      className={cn("w-[100px] !py-[2px] !px-[5px] border border-gray-500 rounded-md focus:outline-none", className)}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}