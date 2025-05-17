import { createSlice } from "@reduxjs/toolkit";

// Types
import { IInputSearchState } from "./type";

const initialState: IInputSearchState = {
  searchValue: ""
}

const inputSearchSlice = createSlice({
  name: "inputSearch",
  initialState,
  reducers: {
    search: (state, { payload }) => {
      state.searchValue = payload
    }
  }
})

export const { search } = inputSearchSlice.actions;
export default inputSearchSlice.reducer;
