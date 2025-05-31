import React from "react";

// Icons
import { IoIosArrowForward } from "react-icons/io";

// Components
import Link from "next/link";

interface INavInfoItemProps {
  name: string;
  link?: string;
  isLast?: boolean;
}

export const NavInfoItem: React.FC<INavInfoItemProps> = ({ name, link, isLast }) => {
  return (
    <span className="flex items-center gap-2 text-emerald-500 capitalize">
      <Link href={link || ""} className="hover:underline">
        {name}
      </Link>
      {!isLast && <IoIosArrowForward className="text-gray-800"/>}
    </span>
  )
}