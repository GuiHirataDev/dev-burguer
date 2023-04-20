import { Card } from "../Card";
import { ListStyled } from "./styles";

export const List = () => {

    const teste = [
        {
          "id": 1,
          "name": "Hamburguer",
          "category": "Sanduíches",
          "price": 14,
          "img": "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg"
        },
        {
          "id": 2,
          "name": "X-Burguer",
          "category": "Sanduíches",
          "price": 16,
          "img": "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg"
        },
        {
          "id": 3,
          "name": "Big Kenzie",
          "category": "Sanduíches",
          "price": 18,
          "img": "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg"
        },
        {
          "id": 4,
          "name": "Fanta Guaraná",
          "category": "Bebidas",
          "price": 5,
          "img": "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg"
        },
        {
          "id": 5,
          "name": "Coca-Cola",
          "category": "Bebidas",
          "price": 4.99,
          "img": "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg"
        },
        {
          "id": 6,
          "name": "Milkshake Ovomaltine",
          "category": "Bebidas",
          "price": 4.99,
          "img": "https://st2.depositphotos.com/3957801/5642/i/600/depositphotos_56423065-stock-photo-bacon-burger.jpg"
        }
      ]

    return (
        <ListStyled>
            <ul>
                {
                    teste.map((elem) => <Card name={elem.name} category={elem.category} img={elem.img} price={elem.price} key={elem.id}/>)
                }
            </ul>
        </ListStyled>
    )
}