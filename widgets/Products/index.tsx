"use client"
import React, { useEffect } from "react";

// Types
import type { IProduct } from "@/entities/product/model/type";

// Components
import { ProductCard } from "@/entities/product/ui/ProductCard";

interface IProductsProps {
  filteredProducts: IProduct[];
  isLoading: boolean;
}

export const Products: React.FC<IProductsProps> = ({ filteredProducts, isLoading }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {isLoading && "Loading..."}
      {filteredProducts.map((product: IProduct, i: number) => (
        <ProductCard key={product.id + i} product={product}/>
      ))}
    </div>
  )
}