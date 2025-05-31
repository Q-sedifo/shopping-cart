import React from "react";

import { fetchProduct } from "@/entities/product/api/productApi";

// Components
import Container from "@/shared/ui/Container";
import { ProductImages } from "./(ui)/ProductImages";
import { ProductInfo } from "./(ui)/ProductInfo";
import { ProductCharacteristics } from "./(ui)/ProductCharacteristics";
import { ProductReviews } from "./(ui)/ProductReviews";
import { NavInfo } from "@/shared/ui/NavInfo";

type TParams = Promise<{ id: string }>

const Product = async ({ params }: { params: TParams }) => {
  const { id } = await params
  const data = await fetchProduct(Number(id))

  console.log(data)

  return (
    <Container>
      <NavInfo productName={data.title} category={data.category}/>
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