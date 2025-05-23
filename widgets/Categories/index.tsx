"use client"

import React from "react";

// Components
import Box from "@/shared/ui/Box";
import Link from "next/link";

// Redux
import { useSelector } from "react-redux";

// Types
import { RootState } from "@/shared/store";

const Categories = () => {
  const { items } = useSelector((state: RootState) => state.categories)

  return (
    <Box className="lg:w-[300px] h-fit lg:sticky top-[94px]">
      <Box.Title>Categories {items.length}</Box.Title>
      <Box.Content className="w-full flex flex-col">
        {items.map((category: string, index: number) => (
          <div key={index} className="capitalize">
            <Link href={`categories/${category}`}>
              { category }
            </Link>
          </div>
        ))}
      </Box.Content>
    </Box>
  )
}

export default Categories;