import React from "react";

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="shadow-sm !p-4 animate-pulse">
      <div className="flex justify-center">
        <div className="w-full h-[200px] bg-gray-200 rounded-md" />
      </div>
      <div className="!mt-3">
        <div className="w-4/5 h-5 bg-gray-200 rounded" />
      </div>
      <div className="!mt-2 space-y-1">
        <div className="w-full h-3 bg-gray-200 rounded" />
        <div className="w-3/4 h-3 bg-gray-200 rounded" />
      </div>
      <div className="w-full mt-5 flex items-center justify-between">
        <div className="w-12 h-4 bg-gray-200 rounded" />
        <div className="w-9 h-9 bg-gray-200 rounded" />
      </div>
    </div>
  )
}