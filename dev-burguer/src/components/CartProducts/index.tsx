import { ProductContext } from "../../contexts/ProductContext";
import { CartItem, CartStyled, TotalValueDiv } from "./styles";
import { useContext } from "react";

export const CartProducts = () => {
  const { currentSale, setCurrentSale, handleSale, cartTotal, setCartTotal } = useContext(ProductContext);

  const values: number[] = []
  currentSale.map((elem) => {
    values.push(elem.price)
  })
  const initialValue = 0;
  const total = values.reduce((acc, cur) => acc + cur, initialValue)
  setCartTotal(total)

  return (
    <CartStyled>
      <h2>Carrinho de compras</h2>
      {currentSale.length !== 0 ? (
        <ul>
          {currentSale.map((elem, index) => (
            <CartItem key={index}>
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
          <p className="value">
            {cartTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </span>
        <button onClick={() => setCurrentSale([])}>Remover todos</button>
      </TotalValueDiv>
    </CartStyled>
  );
};
