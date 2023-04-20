import { HeaderStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div>
        <input type="text" placeholder="Digitar Pesquisa"/>
        <button>Pesquisar</button>
      </div>
    </HeaderStyled>
  );
};
