import React from "react";

// Types
import type { IProduct } from "@/entities/product/model/type";

// Components
import { ProductCard } from "@/entities/product/ui/ProductCard";
import Box from "@/shared/ui/Box";

// Utils
import { randomId } from "@/shared/utils";

interface IProductsProps {
  filteredProducts: IProduct[];
  isLoading: boolean;
}

export const Products: React.FC<IProductsProps> = ({ filteredProducts, isLoading }) => {
  return (
    <Box className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {isLoading && "Loading..."}
      {filteredProducts.map((product: IProduct) => (
        <ProductCard key={randomId()} product={product}/>
      ))}
    </Box>
  )
}