import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
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
import { RootState } from "@/shared/store";
import type { IProduct } from "../model/type";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const [isInCart, setIsInCart] = useState<boolean>(false)
  const { items } = useSelector(
    (state: RootState) => state.cart
  )
  const dispatch = useDispatch()

  const icon = isInCart ? <BsCartCheck className="w-[20px] h-[20px] fill-black"/> : <BsCart3 className="w-[20px] h-[20px] fill-black"/>

  const addToCartToggle = () => {
    if (isInCart) {
      dispatch(removeItem(product.id))
      setIsInCart(false)
      return 
    }

    dispatch(addItem(product))
    setIsInCart(true)
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
            "!bg-emerald-500": isInCart
          })}
          onClick={addToCartToggle}
          icon={icon}
        />
      </div>
    </div>
  )
}