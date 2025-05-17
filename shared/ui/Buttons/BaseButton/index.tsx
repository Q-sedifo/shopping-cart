import React, { ReactNode } from "react";
import cn from "classnames";

interface IBaseButtonProps {
  text?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const BaseButton: React.FC<IBaseButtonProps> = ({ text, icon, className, onClick }) => {
  return (
    <button 
      className={cn("flex justify-center items-center flex-row gap-2 !px-[10px] !py-[5px] rounded-md cursor-pointer bg-emerald-500 !text-white", className)}
      onClick={onClick}
    >
      {text && (
        <span>{ text }</span>
      )}
      { icon && icon }
    </button>
  )
}