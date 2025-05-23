"use client"

import React from "react";

// Redux
import { useDispatch } from "react-redux";
import { setCategories } from "@/shared/store";

interface ICategoriesProvider {
  children: React.ReactNode;
  categories: string[];
}

// For setting categories in Redux store without loading
export const CategoriesProvider: React.FC<ICategoriesProvider> = ({ categories, children }) => {
  const dispatch = useDispatch()

  // Put categories in store
  dispatch(setCategories(categories))

  return (
    <>{ children }</>
  )
}