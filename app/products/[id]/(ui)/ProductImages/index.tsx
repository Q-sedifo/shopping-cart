"use client"
import React, { useState } from "react";
import cn from "classnames";

// Components
import Image from "next/image";
import Box from "@/shared/ui/Box";

// Utils
import { randomId } from "@/shared/utils";

interface IProductImagesProps {
  images: string[];
}

export const ProductImages: React.FC<IProductImagesProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState<string>(images[0])

  const handleChangeActiveProductImage = (image: string) => {
    if (activeImage == image) return
    setActiveImage(image)
  }

  return (
    <Box className="w-full flex flex-col justify-center">
      {images.length > 1 && (
        <div className="w-full flex flex-row gap-2">
          {images.map((image: string) => (
            <div 
              key={randomId()} 
              className={cn("w-[60px] h-[60px] rounded-lg !bg-gray-200 bg-cover bg-center cursor-pointer border-b-2 border-transparent", {
                "!border-emerald-500": image === activeImage
              })}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => handleChangeActiveProductImage(image)}
            />
          ))}
        </div>
      )}
      <Image 
        src={activeImage} 
        alt="Product image" 
        width={100} 
        height={100} 
        className="!w-[60%] !m-[auto]"
      />
    </Box>
  )
}