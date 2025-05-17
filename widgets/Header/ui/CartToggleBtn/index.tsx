"use client"

import React, { useState } from "react";

// Components
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";
import { CartModal } from "@/shared/ui/Modals/CartModal";

// Icons
import { RiShoppingCart2Line } from "react-icons/ri";

export const CartToggleBtn = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false)

  const handleToggleCartModal = () => {
    setIsCartModalOpen(prev => !prev)
  }

  return (
    <>
      <BaseButton 
        text="Open Cart" 
        className="w-full md:w-fit" 
        icon={<RiShoppingCart2Line/>}
        onClick={handleToggleCartModal}
      />
      <CartModal onClose={handleToggleCartModal} isOpen={isCartModalOpen}/>
    </>
  )
}