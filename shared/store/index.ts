import { configureStore } from "@reduxjs/toolkit";

// Slices
import cartReducer, { addItem, deductItem, removeItem, clearCart } from "@/entities/cart/model/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})

export {
  store,
  addItem, 
  deductItem,
  removeItem,
  clearCart,
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

