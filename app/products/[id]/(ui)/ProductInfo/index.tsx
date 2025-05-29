import React from "react";

// Types
import { IProduct } from "@/entities/product/model/type";

// Components
import Box from "@/shared/ui/Box";
import { AddProductToCartBtn } from "@/shared/ui/Buttons/AddProductToCartBtn";
import { ProductRating } from "@/entities/product/ui/ProductRating";

interface IProductInfoProps {
  product: IProduct;
}

export const ProductInfo: React.FC<IProductInfoProps> = ({ product }) => {
  return (
    <Box className="flex-1 h-fit">
      <Box.Title>
        {product?.title}
        <AddProductToCartBtn product={product}/>
      </Box.Title>
      <Box.Content>
        <span className="block">
          {product.stock ? (
            <span className="text-green-700">In stock</span>
          ) : (
            <span className="text-red-700">Out of stock</span>
          )}
        </span>
        <ProductRating rating={product.rating}/>
        <span>{product.price}$</span>
      </Box.Content>
    </Box>
  )
}