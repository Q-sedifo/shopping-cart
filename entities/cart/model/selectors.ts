// Selectors
import { RootState } from "@/shared/store";
import { ICartProduct } from "./type";

export const selectCartItemsCount = (state: RootState): number => {
  return state.cart.items.reduce(
    (total: number, item: ICartProduct) => total + item.amount,
    0
  );
};