import React from "react";
import cn from "classnames";

import { useSelector, useDispatch } from "react-redux";

// Types
import { RootState, clearCart } from "@/shared/store";
import { ICartProduct } from "@/entities/cart/model/type";

// Components
import { Modal } from "@/shared/ui/Modals";
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";
import { ProductCartItem } from "./ui/ProductCartItem";

// Icons
import { IoCloseOutline } from "react-icons/io5";

// Utils
import { randomId } from "@/shared/utils";

interface ICartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<ICartModalProps> = ({ isOpen, onClose }) => {
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  // Get total products price
  const totalPrice = items.map((product: ICartProduct) => product.price * product.amount).reduce((acc, num) => acc + num, 0).toFixed(2)

  // Remove all products from cart
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <Modal isOpen={isOpen}>
      <div className={cn("fixed right-0 top-0 h-[100vh] w-[30%] flex flex-col justify-between bg-white rounded-l-lg shadow-2xl z-[100]")}>
        <div className="relative !p-5">
          <div className="flex items-center justify-between">
            <BaseButton
              className="absolute right-full !bg-white !rounded-full !mr-[10px]" 
              onClick={onClose}
              icon={<IoCloseOutline className="w-[20px] h-[20px] text-black"/>}
            />
            <h3 className="text-[22px] font-bold">Cart</h3>
            {items.length > 0 && (
              <BaseButton
                text="Delete all"
                onClick={handleClearCart}
                className="!bg-black"
              />
            )}
          </div>
          <div className="w-full flex flex-col gap-2 !pt-2">
            {items.map((product: ICartProduct) => (
              <ProductCartItem key={randomId()} product={product}/>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 !p-5">
          <div className="w-full flex flex-row items-center justify-between font-bold">
            <span>Total:</span>
            <span>{totalPrice}$</span>
          </div>
          <BaseButton
            text="Buy"
            onClick={() => {}}
            className="w-full"
          />
        </div>
      </div>
    </Modal>
  )
}