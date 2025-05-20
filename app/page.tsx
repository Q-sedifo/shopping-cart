"use client"
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

// Query
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/entities/product/api/productApi";

// Components
import Container from "@/shared/ui/Container";
import { Products } from "@/widgets/Products";
import { BaseButton } from "@/shared/ui/Buttons/BaseButton";
import Box from "@/shared/ui/Box";

// Icons
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const params = useSearchParams()
  const urlPage = Number(params.get("page") ?? "1") - 1

  const [page, setPage] = useState(urlPage)

  // Getting products
  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page)
  })

  const handleNextPage = () => {
    setPage(prev => prev + 1)
  }

  const handlePrevPage = () => {
    if (page === 0) return
    setPage(prev => prev - 1)
  }

  return (
    <Container>
      <Box className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Products 
          products={data} 
          isLoading={isLoading}
        />
      </Box>
      {/* Pagination */}
      <div className="w-full flex items-center gap-2">
        <BaseButton
          text="Previous"
          onClick={handlePrevPage}
        />
        <BaseButton
          text="Next"
          onClick={handleNextPage}
          icon={<FaArrowRightLong/>}
        />
      </div>
    </Container>
  )
}

export default Home;