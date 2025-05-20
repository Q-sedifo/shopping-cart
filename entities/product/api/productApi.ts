import axios from "axios";

// Types
import { IProduct } from "../model/type";

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

// Search products
export const searchProducts = async (title: string, limit: number = 0): Promise<IProduct[]> => {
  const { data } = await axios.get(`https://dummyjson.com/products/search?q=${title}&limit=${limit}`)
  return data.products as IProduct[]
}