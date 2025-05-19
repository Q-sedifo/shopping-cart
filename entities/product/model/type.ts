export interface IProduct {
  id: string;
  title: string;
  images: string[];
  price: number;
  description: string;
  rating: number;
  stock: number;
  thumbnail: string;
  reviews: IProductReview[];
}

export interface IProductReview {
  comment: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
  date: Date | string;
}

export interface IProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string | null;
}