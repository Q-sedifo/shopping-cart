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
        Product reviews {reviews.length}
      </Box.Title>
      <Box.Content>
        {!!reviews.length ? (
          <div className="w-full flex flex-col gap-2">
            {reviews.map((review: IProductReview) => (
              <div key={randomId()} className="w-full flex flex-row gap-2">
                <div className="w-[50px] h-[50px] !bg-emerald-500 rounded-full"></div>
                <div>
                  <div>{review.reviewerName}</div>
                  <span className="text-xs text-gray-500">
                    {review.comment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex justify-center !py-5">
            <p className="text-xs text-gray-500">
              There are no product reviews from this seller yet
            </p>
          </div>
        )}
      </Box.Content>
    </Box>
  )
}