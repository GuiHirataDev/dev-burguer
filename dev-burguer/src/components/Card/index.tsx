import { CardStyled } from "./styles";
import { ICardData } from "../../interfaces";

export const Card = ({name, category, price, img}: ICardData) => {
    return (
        <CardStyled>
            <img src={`${img}`} alt={`Imagem ${name}`} />
            <div>
                <h1>{name}</h1>
                <p className="paragraph__cat">{category}</p>
                <p className="paragraph__price">{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                <button>Adicionar</button>
            </div>
        </CardStyled>
    )
}