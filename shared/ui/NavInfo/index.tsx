import React from "react";

// Components
import { NavInfoItem } from "./ui/NavInfoItem/inde";

interface INavInfoProps {
  productName?: string;
  category?: string;
}

export const NavInfo: React.FC<INavInfoProps> = ({ productName, category }) => {
  return (
    <div className="w-full flex items-center gap-2 !py-1">
      {category && (
        <>
          <NavInfoItem name="categories" link="/categories"/>
          <NavInfoItem name={category} link={`/categories/${category}`} isLast={!productName}/>
        </>
      )}
      {productName && (
        <NavInfoItem name={productName} isLast/>
      )}
    </div>
  )
}