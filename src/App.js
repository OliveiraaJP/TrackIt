import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./style/GlobalStyle";

import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Today from "./pages/Today";
import Historic from "./pages/Historic";
import Habits from "./pages/Habits";

import UserContext from "./context/UserContext";
import HabitsContext from "./context/HabitsContext";
import CountContext from "./context/CountContext";

function App() {
    const [userData, setUserData] = useState({ image: null, token: null });
    const [habitsData, setHabitsData] = useState({
        id: null,
        name: null,
        days: [],
    });
    const [countData, setCountData] = useState(0);
    const [percentageData, setPercentageData] = useState(0);

    return (
        <BrowserRouter>
            <>
                <UserContext.Provider value={{ userData, setUserData }}>
                    <HabitsContext.Provider
                        value={{ habitsData, setHabitsData }}
                    >
                        <CountContext.Provider
                            value={{
                                countData,
                                setCountData,
                                percentageData,
                                setPercentageData,
                            }}
                        >
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/cadastro" element={<Signup />} />
                                <Route path="/hoje" element={<Today />} />
                                <Route
                                    path="/historico"
                                    element={<Historic />}
                                />
                                <Route path="/habitos" element={<Habits />} />
                            </Routes>
                        </CountContext.Provider>
                    </HabitsContext.Provider>
                </UserContext.Provider>
                <GlobalStyle />
            </>
        </BrowserRouter>
    );
}

export default App;
