"use client"
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "@/entities/product/api/productApi";
import { usePathname } from "next/navigation";
import cn from "classnames";

// Cmponents
import { BaseInput } from "@/shared/ui/Inputs/BaseInput";
import { FoundedProductsList } from "./ui/FoundedProductsList";

// Utils
import debounce from "lodash.debounce";

// Icons
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface IInputSearchProps {
  className?: string;
  placeholder?: string;
  icon?: boolean;
}

export const InputSearch: React.FC<IInputSearchProps> = (props) => {
  const [search, setSearch] = useState<string>("")
  const [inputSearchValue, setInputSearchValue] = useState<string>("")
  const searchInputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()

  // Using debounce for searching optimization
  const debouncedSetSearch = useMemo(
    () => 
      debounce((query: string) => {
        setSearch(query)
      }, 500),
    []
  )

  const { data, isLoading } = useQuery({
    queryKey: ["search", search],
    queryFn: () => searchProducts(search, 5),
    enabled: !!search.length
  })

  const handleSearch = (query: string) => {
    debouncedSetSearch(query)
    setInputSearchValue(query)
  }

  const handleResetSearch = () => {
    setSearch("")
    setInputSearchValue("")
    searchInputRef?.current?.focus()
  }

  // In order to close search after open product page
  useEffect(() => {
    setSearch("")
    setInputSearchValue("")
  }, [pathname])

  return (
    <div className={cn("relative flex flex-row gap-2 items-center w-full border border-gray-500 rounded-md md:w-fit", {
      "!px-[20px]": props.icon
    })}>
      {props?.icon && <IoIosSearch className="absolute left-[5px]"/>}
      <BaseInput 
        {...props}
        onChange={(query) => handleSearch(query)}
        placeholder={props?.placeholder ?? "Search..."}
        className={cn("!border-none", props.className)}
        value={inputSearchValue}
        ref={searchInputRef}
      />
      {inputSearchValue && (
        <IoClose 
          className="absolute right-[5px] cursor-pointer" 
          onClick={handleResetSearch}
        />
      )}
      <FoundedProductsList products={data} isLoading={isLoading} />
    </div>
  )
}