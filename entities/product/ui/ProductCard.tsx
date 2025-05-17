import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Reducers
import { addItem, removeItem} from "@/shared/store";

// Utils
import cn from "classnames";

// Components
import Image from "next/image";
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";

// Icons
import { BsCart3 } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";

// Types
import type { IProduct } from "../model/type";
import { RootState } from "@/shared/store";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const isProductInCart = items.find((item) => item.id === product.id)
  const icon = isProductInCart ? <BsCartCheck className="w-[20px] h-[20px] fill-black"/> : <BsCart3 className="w-[20px] h-[20px] fill-black"/>

  const addToCartToggle = () => {
    if (isProductInCart) {
      dispatch(removeItem(product.id))
      return 
    }

    dispatch(addItem(product))
  }

  return (
    <div className="shadow-sm !p-4">
      <div className="flex justify-center">
        <Image
          src={product.images?.[0]}
          width={200}
          height={200}
          alt="Picture of the product"
        />
      </div>
      <div><span className="text-lg font-semibold">{product.title}</span></div>
      <p className="text-gray-500 text-xs">{product.description}</p>
      <div className="w-full !mt-5 flex items-center justify-between">
        <span className="font-semibold">{product.price}$</span>
        <BaseButton 
          className={cn("!py-[10px] bg-transparent border border-emerald-600 duration-500 hover:bg-emerald-500", {
            "!bg-emerald-500": isProductInCart
          })}
          onClick={addToCartToggle}
          icon={icon}
        />
      </div>
    </div>
  )
}