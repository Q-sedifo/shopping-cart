import { configureStore } from "@reduxjs/toolkit";

// Slices
import cartReducer, { addItem, deductItem, removeItem, clearCart } from "@/entities/cart/model/cartSlice";
import categoryReducer, { setCategories } from "@/entities/category/model/categorySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoryReducer,
  }
})

export {
  store,
  addItem, 
  deductItem,
  removeItem,
  clearCart,
  setCategories
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

