// Selectors
import { RootState } from "@/shared/store";
import { IProduct } from "./type";

export const selectIsProductInCart = (productId: string) => (state: RootState): boolean => {
  const isProductInCart = !!state.cart.items.find((product: IProduct) => product.id === productId)
  return isProductInCart
}