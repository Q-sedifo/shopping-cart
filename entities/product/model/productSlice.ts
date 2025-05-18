import { createSlice } from "@reduxjs/toolkit";

// Async thunks
import { fetchProducts } from "./productThunks";

// Types
import { IProductState } from "./type";

const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: null,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      // FetchProducts
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.isLoading = false
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || "Failed to fetch products"
      })
  }
})


export default productSlice.reducer;