import React from "react";

// Components
import Image from "next/image";
import { AddProductToCartBtn } from "@/shared/ui/Buttons/AddProductToCartBtn";
import Link from "next/link";

// Types
import type { IProduct } from "../model/type";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <div className="shadow-sm !p-4">
      <div className="flex justify-center">
        <Image
          src={product.thumbnail}
          width={200}
          height={200}
          alt="Picture of the product"
        />
      </div>
      <div>
        <Link href={`/products/${product.id}`}>
          <span className="text-lg font-semibold">
            {product.title}
          </span>
        </Link>
      </div>
      <p className="text-gray-500 text-xs">{product.description}</p>
      <div className="w-full !mt-5 flex items-center justify-between">
        <span className="font-semibold">{product.price}$</span>
        <AddProductToCartBtn product={product}/>
      </div>
    </div>
  )
}