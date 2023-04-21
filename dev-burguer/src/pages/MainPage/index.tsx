import { CartProducts } from "../../components/CartProducts"
import { Header } from "../../components/Header"
import { List } from "../../components/ListCard"

export const MainPage = () => {
    return (
        <>
            <Header />
            <List />
            <CartProducts />
        </>
    )
}