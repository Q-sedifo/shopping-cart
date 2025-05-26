import React from "react";

// Components
import Box from "@/shared/ui/Box";

interface ICategoryPageParams {
  name: string;
}

interface ICategoryPageProps {
  params: Promise<ICategoryPageParams>;
}

const CategoryPage = async ({ params }: ICategoryPageProps) => {
  const { name } = await params

  return (
    <Box>
      <Box.Title className="capitalize">Category {name}</Box.Title>
      <Box.Content>
        Products
      </Box.Content>
    </Box>
  )
}

export default CategoryPage;