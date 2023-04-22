import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ICardData {
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductProps {
  children: ReactNode;
}

export interface IProductData {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductContext {
  products: IProductData[];
  setProducts: Dispatch<SetStateAction<IProductData[]>>;
  filteredProducts: IProductData[];
  setFilteredProducts: Dispatch<SetStateAction<IProductData[]>>;
  currentSale: IProductData[];
  setCurrentSale: Dispatch<SetStateAction<IProductData[]>>;
  cartTotal: number;
  setCartTotal: Dispatch<SetStateAction<number>>;
}
