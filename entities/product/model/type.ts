export interface IProduct {
  id: string;
  title: string;
  images: string[];
  price: number;
  description: string;
  rating: number;
}

export interface IProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string | null;
}