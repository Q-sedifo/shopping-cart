import { configureStore } from "@reduxjs/toolkit";

// Slices
import productReducer from "@/entities/product/model/productSlice";
import cartReducer, { addItem, removeItem } from "@/entities/cart/model/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer
  }
})

export {
  store,
  addItem, 
  removeItem
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

