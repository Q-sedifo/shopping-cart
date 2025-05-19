import React from "react";
import cn from "classnames";

import { useDispatch, useSelector } from "react-redux";

// Reducers
import { addItem, removeItem} from "@/shared/store";
import { selectIsProductInCart } from "@/entities/product/model/selectors";

// Components
import { BaseButton } from "../BaseButton";

// Icons
import { BsCart3 } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";

// Types
import { IProduct } from "@/entities/product/model/type";

interface IAddProductToCartBtnProps {
  product: IProduct;
}

export const AddProductToCartBtn: React.FC<IAddProductToCartBtnProps> = ({ product }) => {
  const dispatch = useDispatch()
  const isProductInCart = useSelector(selectIsProductInCart(product.id))
  const icon = isProductInCart ? <BsCartCheck className="w-[20px] h-[20px] fill-black"/> : <BsCart3 className="w-[20px] h-[20px] fill-black"/>

  const addToCartToggle = () => {
    if (isProductInCart) {
      dispatch(removeItem(product.id))
      return 
    }

    dispatch(addItem(product))
  }

  return (
    <BaseButton 
      className={cn("!py-[10px] bg-transparent border border-emerald-600 duration-500 hover:bg-emerald-500", {
        "!bg-emerald-500": isProductInCart
      })}
      onClick={addToCartToggle}
      icon={icon}
    />
  )
}