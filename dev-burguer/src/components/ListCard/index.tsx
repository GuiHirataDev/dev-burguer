import { useContext } from "react";
import { Card } from "../Card";
import { ListStyled } from "./styles";
import { ProductContext } from "../../contexts/ProductContext";

export const List = () => {
  const { products, filteredProducts } = useContext(ProductContext);
  return (
    <ListStyled>
      <ul>
        {filteredProducts.length !== 0
          ? filteredProducts.map((elem) => (
              <Card
                id={elem.id}
                name={elem.name}
                category={elem.category}
                img={elem.img}
                price={elem.price}
                key={elem.id}
              />
            ))
          : products.map((elem) => (
              <Card
                id={elem.id}
                name={elem.name}
                category={elem.category}
                img={elem.img}
                price={elem.price}
                key={elem.id}
              />
            ))}
      </ul>
    </ListStyled>
  );
};
