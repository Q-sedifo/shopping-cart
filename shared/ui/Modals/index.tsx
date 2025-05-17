import React from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal: React.FC<IModalProps> = ({ children, isOpen }) => {
  return isOpen ? createPortal(children, document.getElementById("modal") as Element) : null
}