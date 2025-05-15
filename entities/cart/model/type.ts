import { IProduct } from "@/entities/product/model/type";

export interface ICartState {
  items: IProduct[] | [];
}