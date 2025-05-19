import React from "react";

// Components
import Box from "@/shared/ui/Box";

// Types
import { IProductReview } from "@/entities/product/model/type";

// Utils
import { randomId } from "@/shared/utils";

interface IProductReviewsProps {
  reviews: IProductReview[];
}

export const ProductReviews: React.FC<IProductReviewsProps> = ({ reviews }) => {
  return (
    <Box>
      <Box.Title>
        Reviews {reviews.length}
      </Box.Title>
      <Box.Content>
        {reviews.map((review: IProductReview) => (
          <div key={randomId()}>{review.comment}</div>
        ))}
      </Box.Content>
    </Box>
  )
}