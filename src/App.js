import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "./style/GlobalStyle";

import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Today from "./pages/Today";
import Historic from "./pages/Historic";
import Habits from "./pages/Habits"

import UserContext from "./context/UserContext";
import HabitsContext from "./context/HabitsContext";

function App() {
    const [userData, setUserData] = useState({image: null, token: null});
    const [habitsData, setHabitsData] = useState({id:null, name:null, days:[]})

    return (
        <BrowserRouter>
            <>
                <UserContext.Provider value={{ userData, setUserData,  }}>
                    <HabitsContext.Provider value={{habitsData, setHabitsData}}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Signup />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<Historic />} />
                        <Route path="/habitos" element={<Habits />} />
                    </Routes>
                    </HabitsContext.Provider>
                </UserContext.Provider>
                <GlobalStyle />
            </>
        </BrowserRouter>
    );
}

export default App;
