"use client"
import React from "react";

// Redux
import { Provider } from "react-redux";
import { store } from "@/shared/store";

interface IProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<IProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}