"use client"
import React from "react";
import { usePathname } from "next/navigation";
import cn from "classnames";

// Components
import Link from "next/link";

interface ICategoryLinkProps {
  name: string;
}

export const CategoryLink: React.FC<ICategoryLinkProps> = ({ name }) => {
  const path = usePathname()

  const link = `/categories/${name}`
  const isActive = link === path

  return (
    <Link href={link}>
      <div className={cn("!py-1 capitalize border-b border-transparent", {
        "text-emerald-500 !border-emerald-500": isActive
      })}>
        { name }
      </div>
    </Link>
  )
}