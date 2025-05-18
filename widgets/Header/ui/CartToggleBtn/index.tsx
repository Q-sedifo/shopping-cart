"use client"

import React, { useState } from "react";

// Components
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";
import { CartModal } from "@/shared/ui/Modals/CartModal";

// Redux
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "@/entities/cart/model/selectors";

// Icons
import { RiShoppingCart2Line } from "react-icons/ri";

export const CartToggleBtn = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false)
  const cartItemsCount = useSelector(selectCartItemsCount)

  const handleToggleCartModal = () => {
    setIsCartModalOpen(prev => !prev)
  }

  return (
    <span className="block w-fit relative">
      <BaseButton 
        text="Open Cart" 
        className="w-full md:w-fit" 
        icon={<RiShoppingCart2Line/>}
        onClick={handleToggleCartModal}
      />
      <span className="flex items-center justify-center absolute right-[-12px] top-[-12px] w-[30px] h-[30px] !p-2 rounded-full !bg-black text-emerald-500">
        {cartItemsCount}
      </span>
      <CartModal onClose={handleToggleCartModal} isOpen={isCartModalOpen}/>
    </span>
  )
}