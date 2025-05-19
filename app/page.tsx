"use client"
import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

// Components
import Container from "@/shared/ui/Container";
import { Products } from "@/widgets/Products";

import { useDispatch, useSelector } from "react-redux";

// Types
import { RootState, AppDispatch } from "@/shared/store";

// Reducers
import { fetchProducts } from "@/entities/product/model/productThunks";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  const params = useSearchParams()
  const page = params.get("page") ?? "1"
  const productsLimit = 20

  const { searchValue } = useSelector((state: RootState) => state.inputSearch)
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    dispatch(fetchProducts({ 
      limit: productsLimit, 
      from: ((Number(page) -1) * productsLimit)
    }))
  }, [dispatch, page])

  const filteredProducts = useMemo(() => {
    if (!searchValue) return products

    const value = searchValue.toLowerCase().trim()
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(value))

    return filteredProducts
  }, [products, searchValue])

  return (
    <Container>
      <Products 
        filteredProducts={filteredProducts} 
        isLoading={isLoading}
      />
    </Container>
  )
}

export default Home;