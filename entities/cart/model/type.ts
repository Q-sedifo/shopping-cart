import { IProduct } from "@/entities/product/model/type";

export interface ICartProduct extends IProduct {
  amount: number;
}

export interface ICartState {
  items: ICartProduct[];
}