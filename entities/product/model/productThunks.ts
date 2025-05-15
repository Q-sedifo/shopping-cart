import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "./type";

export const fetchProducts = createAsyncThunk<IProduct[]>("products/fetch", async () => {
  const response = await fetch('https://dummyjson.com/products?limit=6')
  const data = await response.json()
  return data.products as IProduct[]
})
