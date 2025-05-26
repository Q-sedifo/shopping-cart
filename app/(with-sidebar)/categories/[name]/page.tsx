"use client"
import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

// Query
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "@/entities/product/api/productApi";

// Components
import Box from "@/shared/ui/Box";
import { Products } from "@/widgets/Products";
import { Pagination } from "@/shared/ui/Pagination";

interface IParams {
  name: string;
}

const CategoryPage = () => {
  const { name } = useParams() as unknown as IParams
  const searchParams = useSearchParams()

  const urlPage = Number(searchParams.get("page") ?? "1") - 1

  const [page, setPage] = useState(urlPage)

  // Getting products
  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProductsByCategory(name, page)
  })

   const handleNextPage = () => {
    setPage(prev => prev + 1)
  }

  const handlePrevPage = () => {
    if (page === 0) return
    setPage(prev => prev - 1)
  }

  return (
    <Box>
      <Box.Title className="capitalize">
        Category {name}
      </Box.Title>
      <Box.Content>
        <Products 
          products={data} 
          isLoading={isLoading}
        />
        <Pagination
          page={page}
          onNextClick={handleNextPage}
          onPrevClick={handlePrevPage}
        />
      </Box.Content>
    </Box>
  )
}

export default CategoryPage;