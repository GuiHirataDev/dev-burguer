import { CartProducts } from "../../components/CartProducts"
import { Header } from "../../components/Header"
import { List } from "../../components/ListCard"
import { MainContent } from "./styles"

export const MainPage = () => {
    return (
        <>
            <Header />
            <MainContent>
                <List />
                <CartProducts />
            </MainContent>
        </>
    )
}