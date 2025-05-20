import axios from "axios";

// Types
import { IProduct } from "../model/type";

interface IFetchPropductsArgs {
  limit?: number;
  from?: number;
}

// Gettings all products
export const fetchProducts = async (page: number = 0, limit: number = 12): Promise<IProduct[]> => {
  const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)
  return data.products as IProduct[]
}

// Getting single product by ID
export const fetchProduct = async (id: number): Promise<IProduct> => {
  const { data } = await axios.get(`https://dummyjson.com/products/${id}`)
  return data as IProduct
}