import { createSlice } from "@reduxjs/toolkit";

// Types
import { ICategoryState } from "./type";

const initialState: ICategoryState = {
  items: [],
}

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.items = payload
    }
  }
})

export default categorySlice.reducer;
export const { setCategories } = categorySlice.actions;