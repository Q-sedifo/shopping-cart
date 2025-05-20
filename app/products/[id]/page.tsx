"use client"
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "@/entities/product/api/productApi";

// Components
import Container from "@/shared/ui/Container";
import Box from "@/shared/ui/Box";
import { ProductImages } from "./(ui)/ProductImages";
import { ProductInfo } from "./(ui)/ProductInfo";
import { ProductCharacteristics } from "./(ui)/ProductCharacteristics";
import { ProductReviews } from "./(ui)/ProductReviews";

interface IProductProps {
  params: Promise<{ id: string }>
}

const Product: React.FC<IProductProps> = ({ params }) => {
  const { id } = React.use(params)

  // Getting product
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(Number(id)),
    enabled: !!id, 
  })

  console.log(data)

  return (
    <Container>
      {isLoading || isError && (
        <Box className="flex-2">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error!</p>}
        </Box>
      )}
      {data && (
        <div className="w-full flex flex-col gap-5 lg:flex-row">
          <div className="w-full flex flex-2 flex-col gap-5">
            <ProductImages images={data.images}/>
            <ProductCharacteristics product={data}/>
            <ProductReviews reviews={data.reviews}/>
          </div>
          <div className="flex-1">
            <ProductInfo product={data}/>
          </div>
        </div>
      )}
    </Container>
  )
}

export default Product;