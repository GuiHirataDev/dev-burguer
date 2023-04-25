import { createContext, useState, useEffect } from "react";
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
      .catch((err) => console.error(err));
  };
  getAllProducts();

  const showProducts = (product: string) => {
    const filtProd = products.filter((word) => word.name.toLocaleLowerCase().includes(product));
    setFilteredProducts(filtProd);
  };

  const handleClick = (id: number) => {
    const findProd = products.find((prod) => prod.id === id)
    setCurrentSale((currentSalePrev: any) => [...currentSalePrev, findProd])
  }

  const handleSale = (prod: any) => {
      const filteredSale = currentSale.filter((elem) => elem !== prod)
      setCurrentSale(filteredSale)
  }

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
        showProducts,
        handleClick,
        handleSale,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
