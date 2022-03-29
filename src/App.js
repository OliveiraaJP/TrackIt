import { BrowserRouter, Routes, Route } from "react-router-dom"
import {createGlobalStyle, ThemeProvider} from "styled-components"
import { GlobalStyle } from "./Assets/GlobalStyle";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />
                <GlobalStyle />
            </Routes>
        </BrowserRouter>
    )
}

export default App;