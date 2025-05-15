import { createSlice } from "@reduxjs/toolkit";

// Types
import { ICartState } from "./type";

const initialState: ICartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      
    },
    removeItem: (state, action) => {
      const filteredCart = state.items.filter((product) => product.id !== action.payload)
      state.items = filteredCart
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;