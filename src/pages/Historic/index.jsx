import Footer from "../../components/Footer";
import Header from "../../components/Header";

import {$container} from "./styles"

function Historic (){
    return (
        <>
        <Header />
        <$container>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </$container>
        <Footer />
        </>
    )
}

export default Historic;