import { IProduct } from "@/entities/product/model/type";

// Selectors
import { RootState } from "@/shared/store";
import { ICartProduct } from "./type";

export const selectCartItemsCount = (state: RootState): number => {
  return state.cart.items.reduce(
    (total: number, item: ICartProduct) => total + item.amount,
    0
  )
}

export const selectIsProductInCart = (productId: string) => (state: RootState): boolean => {
  const isProductInCart = !!state.cart.items.find((product: IProduct) => product.id === productId)
  return isProductInCart
}