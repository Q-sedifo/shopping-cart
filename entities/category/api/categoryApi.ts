import axios from "axios";

// Gettings all categories
export const fetchCategories = async (): Promise<string[]> => {
  const { data } = await axios.get("https://dummyjson.com/products/category-list")
  return data as string[]
}