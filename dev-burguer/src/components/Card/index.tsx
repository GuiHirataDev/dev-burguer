import { CardStyled } from "./styles";
import { ICardData } from "../../interfaces";
import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductContext";

export const Card = ({id, name, category, price, img}: ICardData) => {

    const { handleClick } = useContext(ProductContext)

    return (
        <CardStyled>
            <img src={`${img}`} alt={`Imagem ${name}`} />
            <div>
                <h1>{name}</h1>
                <p className="paragraph__cat">{category}</p>
                <p className="paragraph__price">{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                <button onClick={() => handleClick(id)}>Adicionar</button>
            </div>
        </CardStyled>
    )
}