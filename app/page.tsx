"use client"
import React, { useEffect, useMemo } from "react";

// Components
import Container from "@/shared/ui/Container"
import { Products } from "@/widgets/Products"

import { useDispatch, useSelector } from "react-redux";

// Types
import { RootState, AppDispatch } from "@/shared/store";

// Reducers
import { fetchProducts } from "@/entities/product/model/productThunks";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()

  const { searchValue } = useSelector((state: RootState) => state.inputSearch)
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const filteredProducts = useMemo(() => {
    if (!searchValue) return products

    const value = searchValue.toLowerCase().trim()
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(value) )

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