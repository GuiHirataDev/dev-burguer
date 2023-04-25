import { ProductContext } from "../../contexts/ProductContext";
import { CartItem, CartStyled, TotalValueDiv } from "./styles";
import { useContext } from "react";

export const CartProducts = () => {
  const { currentSale, handleSale } = useContext(ProductContext);

  return (
    <CartStyled>
      <h2>Carrinho de compras</h2>
      {currentSale.length !== 0 ? (
        <ul>
          {currentSale.map((elem) => (
            <CartItem key={elem.id}>
              <div>
                <img src={elem.img} alt={`Imagem de ${elem.name}`} />
                <span>
                  <h3>{elem.name}</h3>
                  <p>{elem.category}</p>
                </span>
              </div>
              <button onClick={() => handleSale(elem)}>Remover</button>
            </CartItem>
          ))}
        </ul>
      ) : (
        <h3 className="emptyCard">Carrinho vazio</h3>
      )}
      <TotalValueDiv>
        <span>
          <p className="total">Total</p>
          <p className="value">{"R$ 40,00"}</p>
        </span>
        <button>Remover todos</button>
      </TotalValueDiv>
    </CartStyled>
  );
};
