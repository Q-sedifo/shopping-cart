import { configureStore } from "@reduxjs/toolkit";

// Slices
import productReducer from "@/entities/product/model/productSlice";
import cartReducer, { addItem, deductItem, removeItem } from "@/entities/cart/model/cartSlice";
import inputSearchReducer, { search } from "@/features/inputSearch/model/inputSearchSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    inputSearch: inputSearchReducer
  }
})

export {
  store,
  addItem, 
  deductItem,
  removeItem,
  search
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

