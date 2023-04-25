import { useContext } from "react";
import { HeaderStyled } from "./styles";
import { ProductContext } from "../../contexts/ProductContext";

export const Header = () => {

  const { showProducts } = useContext(ProductContext)

  return (
    <HeaderStyled>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div>
        <input 
          type="text" placeholder="Digitar Pesquisa" 
          onChange={(e) => showProducts(e.target.value.toLocaleLowerCase())}
        />
        <button>Pesquisar</button>
      </div>
    </HeaderStyled>
  );
};
