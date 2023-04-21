import { CartItem, CartStyled, TotalValueDiv } from "./styles";

export const CartProducts = () => {
  const teste = [
    {
      img: "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg",
      name: "Hamburguer",
      category: "Sanduíches",
    },
    {
      img: "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg",
      name: "Hamburguer",
      category: "Sanduíches",
    },
    {
      img: "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg",
      name: "Hamburguer",
      category: "Sanduíches",
    },
  ];

  return (
    <CartStyled>
      <h2>Carrinho de compras</h2>
      <ul>
        {teste.map((elem, index) => (
          <CartItem key={index}>
            <div>
              <img src={elem.img} alt={`Imagem de ${elem.name}`} />
              <span>
                <h3>{elem.name}</h3>
                <p>{elem.category}</p>
              </span>
            </div>
            <button>Remover</button>
          </CartItem>
        ))}
      </ul>
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
