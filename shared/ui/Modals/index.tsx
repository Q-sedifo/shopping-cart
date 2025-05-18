"use client"
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal: React.FC<IModalProps> = ({ children, isOpen }) => {
  // Remove scroll during modal is open
  useEffect(() => {
    const body = document.body
    
    if (isOpen) {
      body.style.overflowY = "hidden"
      return
    }

    body.style.overflowY = "scroll"

    return () => {
      body.style.overflowY = "scroll"
    }
  }, [isOpen])

  return isOpen ? (
    createPortal(children, document.getElementById("modal") as Element)
  ) : null
}