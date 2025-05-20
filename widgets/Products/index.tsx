import React from "react";

// Types
import type { IProduct } from "@/entities/product/model/type";

// Components
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { ProductCardSkeleton } from "@/entities/product/ui/ProductCardSkeleton";

// Utils
import { randomId } from "@/shared/utils";

interface IProductsProps {
  products: IProduct[] | undefined;
  isLoading: boolean;
}

export const Products: React.FC<IProductsProps> = ({ products, isLoading }) => {
  return (
    <>
      {isLoading && (
        Array.from({ length: 9 }, (_, i) => (
          <ProductCardSkeleton key={i} />
        )
      ))}
      {products?.map((product: IProduct) => (
        <ProductCard key={randomId()} product={product}/>
      ))}
    </>
  )
}