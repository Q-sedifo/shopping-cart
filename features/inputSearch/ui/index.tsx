"use client"
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "@/entities/product/api/productApi";
import { usePathname } from "next/navigation";
import cn from "classnames";

// Cmponents
import { BaseInput } from "@/shared/ui/Inputs/BaseInput";
import Link from "next/link";

// Utils
import { randomId } from "@/shared/utils";

// Icons
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

// Types
import { IProduct } from "@/entities/product/model/type";

interface IInputSearchProps {
  className?: string;
  placeholder?: string;
  icon?: boolean;
}

export const InputSearch: React.FC<IInputSearchProps> = (props) => {
  const [search, setSearch] = useState<string>("")
  const pathname = usePathname()

  const { data, isLoading } = useQuery({
    queryKey: ["search", search],
    queryFn: () => searchProducts(search, 5),
    enabled: !!search.length
  })

  const handleSearch = (query: string) => {
    setSearch(query)
  }

  const handleResetSearch = () => {
    setSearch("")
  }

  // In order to close search after open product page
  useEffect(() => {
    setSearch('')
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
        value={search}
      />
      {search && (
        <IoClose 
          className="absolute right-[5px] cursor-pointer" 
          onClick={handleResetSearch}
        />
      )}
      {data && (
        <div className="absolute w-full !p-5 left-0 top-[calc(100%+15px)] rounded-lg !bg-white shadow-xl">
          {isLoading && (
            <span className="text=black">Loading...</span>
          )}
          {data.map((product: IProduct) => (
            <Link href={`/products/${product.id}`} key={randomId()}>
              <div className="w-full flex gap-2 text-black">
                <div 
                  className="w-[50px] h-[50px] rounded-md bg-cover bg-center !mb-2"
                  style={{ backgroundImage: `url(${product.thumbnail})` }}
                >
                </div>
                {product.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}