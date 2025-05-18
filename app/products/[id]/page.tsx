"use client"
import React from "react";

import { useQuery } from "@tanstack/react-query";

// Components
import Container from "@/shared/ui/Container";

const fetchProduct = async (id: number) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  return res.json()
}

interface IProductProps {
  params: Promise<{ id: string }>
}

const Product: React.FC<IProductProps> = ({ params }) => {
  const { id } = React.use(params)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(Number(id)),
    enabled: !!id, 
  })

  console.log(data)

  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
    </Container>
  )
}

export default Product;