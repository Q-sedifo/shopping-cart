"use client"
import React from "react";
import cn from "classnames";

// Redux
import { useDispatch } from "react-redux";
import { search } from "@/shared/store";

// Cmponents
import { BaseInput } from "@/shared/ui/Inputs/BaseInput";

// Icons
import { IoIosSearch } from "react-icons/io";

interface IInputSearchProps {
  className?: string;
  placeholder?: string;
  icon?: boolean;
}

export const InputSearch: React.FC<IInputSearchProps> = (props) => {
  const dispatch = useDispatch()

  const handleInputChange = (value: string) => {
    dispatch(search(value))
  }

  return (
    <div className={cn("relative flex flex-row gap-2 items-center w-full border border-gray-500 rounded-md md:w-fit", {
      "!pl-[20px]": props.icon
    })}>
      {props?.icon && <IoIosSearch className="absolute left-[5px]"/>}
      <BaseInput 
        {...props}
        onChange={handleInputChange}
        placeholder={props?.placeholder ?? "Search..."}
        className={cn("!border-none", props.className)}
      />
    </div>
  )
}