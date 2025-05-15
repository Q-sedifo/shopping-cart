"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Types
import type { IProduct } from "@/entities/product/model/type";
import { RootState, AppDispatch } from "@/shared/store";

// Reducers
import { fetchProducts } from "@/entities/product/model/productThunks";

// Components
import { ProductCard } from "@/entities/product/ui/ProductCard";

export const Products = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
      {isLoading && "Loading..."}
      {products.map((product: IProduct, i: number) => (
        <ProductCard key={product.id + i} product={product}/>
      ))}
    </div>
  )
}