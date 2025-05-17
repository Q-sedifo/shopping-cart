import React from "react";

import { useDispatch } from "react-redux";

// Reducers
import { addItem, removeItem} from "@/shared/store";

// Types
import { ICartProduct } from "@/entities/cart/model/type";

// Components
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";

// Icons
import { IoAddOutline } from "react-icons/io5";
import { IoTrashSharp } from "react-icons/io5";
import { HiMinus } from "react-icons/hi2";

interface IProductCartItemProps {
  product: ICartProduct;
}

export const ProductCartItem: React.FC<IProductCartItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="w-full flex flex-row items-center justify-between gap-2">
      {product.title}
      <div className="flex flex-row items-center gap-2">
        <BaseButton 
          onClick={() => dispatch(addItem(product))}
          icon={<IoAddOutline/>}
        />
        {product.amount}
        <BaseButton
          onClick={() => {}}
          icon={<HiMinus/>}
        />
        <BaseButton
          onClick={() => dispatch(removeItem(product.id))}
          icon={<IoTrashSharp/>}
        />
      </div>
    </div>
  )
}