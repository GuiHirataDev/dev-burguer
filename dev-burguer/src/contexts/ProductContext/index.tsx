import { ReactNode, createContext, useState } from "react";
import { IProductContext, IProductData, IProductProps } from "../../interfaces";
import { api } from "../../components/services/api";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IProductProps) => {
  const [products, setProducts] = useState<IProductData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProductData[]>([]);
  const [currentSale, setCurrentSale] = useState<IProductData[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const getAllProducts = async () => {
    await api
        .get("")
        .then((res) => setProducts(res.data))
        .catch((err) => console.error(err))
  }
  getAllProducts()

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        currentSale,
        setCurrentSale,
        cartTotal,
        setCartTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
