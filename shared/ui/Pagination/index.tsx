import React from "react";

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
  return (
    <div className="w-full flex items-center gap-2">
      <BaseButton
        text="Previous"
        onClick={onPrevClick}
      />
      <BaseButton
        text="Next"
        onClick={onNextClick}
        icon={<FaArrowRightLong/>}
      />
    </div>
  )
}