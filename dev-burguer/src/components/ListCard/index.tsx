import { useContext } from "react";
import { Card } from "../Card";
import { ListStyled } from "./styles";
import { ProductContext } from "../../contexts/ProductContext";

export const List = () => {
  const { products } = useContext(ProductContext);
  return (
    <ListStyled>
      <ul>
        {products.map((elem) => (
          <Card
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
