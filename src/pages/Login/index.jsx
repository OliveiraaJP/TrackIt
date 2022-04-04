import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "../../context/UserContext";

import Logo from "../../assets/logo-trackit.png"
import {$container} from "./styles"
import axios from "axios";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    const {userData, setUserData} = useContext(UserContext)
    const navigate = useNavigate();

    function login(event){
        event.preventDefault()
        setIsLoaded(!isLoaded)

        const LOGIN__API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body ={
            email,
            password
        }

        const promise = axios.post(LOGIN__API, body);
        promise.then(response => {
            const {data} = response;

            setUserData({image: data.image, token: data.token})
            navigate("/hoje")
        })
        promise.catch(err => {
                setIsLoaded(false)
                setPassword("")
                setEmail("")
                window.alert("Por favor preencha corretamente o formulário");
        
            })
    }


    return(
        <$container>
        <img src={Logo} alt="" />
        <p>TrackIt</p>
        <form onSubmit={login}>
            {!isLoaded && (
                <>
                <input type="email" value={email} placeholder = "email" onChange={e => setEmail(e.target.value)} required/>
                <input type= "password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required/>
                <button type="submit"> Enviar </button>
                </>
            )}
            {isLoaded && (
                <>
                <input className="load" type="email" value={email} placeholder = "email" onChange={e => setEmail(e.target.value)} required/>
                <input className="load" type= "password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required/>
                <button disabled className="load"> <ThreeDots color="#fff" height="40" width="40" /> </button>
                </>
            )}
        </form>
        <Link to="/cadastro" >
            <span> Não tem uma conta? Cadastre-se! </span>
        </Link>
        </$container>
    )
}

export default Login;