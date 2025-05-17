import { createSlice } from "@reduxjs/toolkit";

// Types
import { ICartState, ICartProduct } from "./type";

const initialState: ICartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const foundedProduct = state.items.find((product) => product.id === payload.id)

      if (!foundedProduct) {
        const newProduct: ICartProduct = { ...payload, amount: 1 }
        state.items.push(newProduct)
        return
      }

      foundedProduct.amount += 1
    },
    removeItem: (state, { payload }) => {
      const filteredCart = state.items.filter((product) => product.id !== payload)
      state.items = filteredCart
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;