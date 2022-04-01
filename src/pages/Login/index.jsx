import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import UserContext from "../../context/UserContext";

import Logo from "../../assets/logo-trackit.png"
import {$container} from "./styles"
import axios from "axios";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {userData, setUserData} = useContext(UserContext)
    const navigate = useNavigate();

    function login(event){
        event.preventDefault()

        const LOGIN__API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body ={
            email,
            password
        }

        const promise = axios.post(LOGIN__API, body);
        promise.then(response => {
            const {data} = response;
            console.log(data);
            setUserData({image: data.image, token: data.token})
            navigate("/hoje")
        })
        promise.catch(err => console.log("Ocorreu algum erro no login!"))
    }
    console.log(userData);
    console.log(email, password);


    return(
        <$container>
        <img src={Logo} alt="" />
        <p>TrackIt</p>
        <form onSubmit={login}>
            <input type="email" value={email} placeholder = "email" onChange={e => setEmail(e.target.value)} required/>
            <input type= "password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required/>
            <button type="submit"> Enviar </button>
        </form>
        <Link to="/cadastro" >
            <span> Não tem uma conta? Cadastre-se! </span>
        </Link>
        </$container>
    )
}

export default Login;