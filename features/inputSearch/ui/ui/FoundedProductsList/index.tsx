import React, { memo } from "react";

// Types
import { IProduct } from "@/entities/product/model/type";

// Components
import Link from "next/link";

// Utils
import { randomId } from "@/shared/utils";

interface FoundedProductsListProps {
  products: IProduct[] | undefined;
  isLoading: boolean;
}

export const FoundedProductsList: React.FC<FoundedProductsListProps> = memo(({ products, isLoading }) => {
  return products ? (
    <div className="absolute w-full !p-5 left-0 top-[calc(100%+15px)] rounded-lg !bg-white shadow-xl">
      {isLoading && (
        <span className="text-black">Loading...</span>
      )}
      {products?.length === 0 && (
        <span className="text-black">Nothing found</span>
      )}
      {products.map((product: IProduct) => (
        <Link href={`/products/${product.id}`} key={randomId()}>
          <div className="w-full flex gap-2 text-black">
            <div 
              className="w-[50px] h-[50px] rounded-md bg-cover bg-center !mb-2"
              style={{ backgroundImage: `url(${product.thumbnail})` }}
            >
            </div>
            {product.title}
          </div>
        </Link>
      ))}
    </div>
  ) : null
})