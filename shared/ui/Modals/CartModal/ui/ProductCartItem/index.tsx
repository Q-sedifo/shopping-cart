import React from "react";

import { useDispatch } from "react-redux";

// Reducers
import { addItem, deductItem, removeItem } from "@/shared/store";

// Types
import { ICartProduct } from "@/entities/cart/model/type";

// Components
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";
import Image from "next/image";

// Icons
import { IoAddOutline } from "react-icons/io5";
import { IoTrashSharp } from "react-icons/io5";
import { HiMinus } from "react-icons/hi2";

interface IProductCartItemProps {
  product: ICartProduct;
}

export const ProductCartItem: React.FC<IProductCartItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddProduct = () => {
    dispatch(addItem(product))
  }

  const hadnleDeductItem = () => {
    dispatch(deductItem(product.id))
  }

  const handleRemoveProduct = () => {
    dispatch(removeItem(product.id))
  }

  return (
    <div className="w-full flex flex-row items-center justify-between gap-2">
      <div className="flex flex-row items-center gap-2">
        <Image 
          src={product?.images[0]} 
          alt={product.title} 
          width={50} 
          height={50}
        />
        <span className="text-xs">{product.title}</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <BaseButton
          onClick={hadnleDeductItem}
          icon={<HiMinus/>}
        />
        {product.amount}
        <BaseButton 
          onClick={handleAddProduct}
          icon={<IoAddOutline/>}
        />
        <BaseButton
          onClick={handleRemoveProduct}
          icon={<IoTrashSharp/>}
          className="!bg-red-900"
        />
      </div>
    </div>
  )
}