import React from "react";

// Types
import { IProduct } from "@/entities/product/model/type";

// Components
import Box from "@/shared/ui/Box";

interface IProductCharacteristicsProps {
  product: IProduct;
}

export const ProductCharacteristics: React.FC<IProductCharacteristicsProps> = ({ product }) => {
  return (
     <Box>
        <Box.Title>Characteristics and description</Box.Title>
        <Box.Content>
          {product.description}
        </Box.Content>
      </Box>
  )
}