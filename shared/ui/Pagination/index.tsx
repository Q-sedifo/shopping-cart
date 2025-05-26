import React from "react";
import cn from "classnames";

// Components
import { BaseButton } from "../Buttons/BaseButton";

// Icons
import { FaArrowRightLong } from "react-icons/fa6";

interface IPaginationProps {
  page: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const Pagination: React.FC<IPaginationProps> = ({ page, onNextClick, onPrevClick }) => {
  const isFirstPage = page === 0
  
  return (
    <div className="w-full flex items-center gap-2 !mt-2">
      <BaseButton
        text="Previous"
        onClick={onPrevClick}
        className={cn({ "opacity-50": isFirstPage })}
        disabled={isFirstPage}
      />
      <BaseButton
        text="Next"
        onClick={onNextClick}
        icon={<FaArrowRightLong/>}
      />
    </div>
  )
}