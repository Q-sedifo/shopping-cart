import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "./type";

interface IFetchPropductsArgs {
  limit?: number;
  from?: number;
}

// Gettings products
export const fetchProducts = createAsyncThunk<IProduct[], IFetchPropductsArgs>("products/fetch", async ({ limit = 20, from = 0 }) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${from}`)
  const data = await response.json()
  return data.products as IProduct[]
})