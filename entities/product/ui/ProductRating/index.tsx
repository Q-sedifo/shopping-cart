import React from "react";

// Icons
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

interface ProductRatingProps {
  rating: number;
  maxStars?: number;
}

export const ProductRating: React.FC<ProductRatingProps> = ({ rating, maxStars = 5 }) => {
  // Calculating stars by rating
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="w-fit flex items-center gap-1 text-amber-500">
      {/* Full stars */}
      {Array(fullStars).fill(null).map((_, i) => (
        <BsStarFill key={`f${i}`} className="w-[20px] h-[20px]"/>
      ))}
      {/* Half star */}
      {hasHalfStar && (
        <BsStarHalf className="w-[20px] h-[20px]"/>
      )}
      {/* Empty stars */}
      {Array(emptyStars).fill(null).map((_, i) => (
        <BsStar key={`f${i}`} className="w-[20px] h-[20px]"/>
      ))}
    </div>
  )
}