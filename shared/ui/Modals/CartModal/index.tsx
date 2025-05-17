import React from "react";
import cn from "classnames";

import { useSelector } from "react-redux";

// Types
import { RootState } from "@/shared/store";
import { ICartProduct } from "@/entities/cart/model/type";

// Components
import { Modal } from "@/shared/ui/Modals";
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";
import { ProductCartItem } from "./ui/ProductCartItem";

// Icons
import { IoCloseOutline } from "react-icons/io5";

interface ICartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<ICartModalProps> = ({ isOpen, onClose }) => {
  const { items } = useSelector((state: RootState) => state.cart)

  return (
    <Modal isOpen={isOpen}>
      <div className={cn("fixed right-0 top-0 h-[100vh] w-[30%] flex flex-col justify-between bg-white rounded-l-lg shadow-2xl z-[100]")}>
        <div className="relative !p-5">
          <div className="flex items-center">
            <BaseButton
              className="absolute right-full !bg-white !rounded-full !mr-[10px]" 
              onClick={onClose}
              icon={<IoCloseOutline className="w-[20px] h-[20px] text-black"/>}
            />
            <BaseButton
              text="Delete all"
              onClick={() => {}}
            />
          </div>
          <div className="w-full flex flex-col gap-2 !pt-2">
            {items.map((product: ICartProduct, i: number) => (
              <ProductCartItem key={product.id + i} product={product}/>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 !p-5">
          <div className="w-full flex flex-row items-center justify-between font-bold">
            <span>Total:</span>
            <span>110.24$</span>
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