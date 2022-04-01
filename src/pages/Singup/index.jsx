import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Logo from "../../assets/logo-trackit.png"

import {$container} from "./styles"

function Singup(){

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");

    console.log(email, name, image, password);

    function singup(event){
        event.preventDefault()

        const URL_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body ={
            email,
            name,
            image,
            password
        }

        const request = axios.post(URL_API, body);
        request.then(promise => {
            const {data} = promise;
            console.log(data);
            navigate("/")
        });
        request.catch(err => console.log("deu erro no teu cadastro em, presta atenção"))
        
    }


    return(
        <$container>
        <img src={Logo} alt="" />
        <p>TrackIt</p>
        <form onSubmit={singup}>
            <input type="email" value={email} placeholder = "email" onChange={e => setEmail(e.target.value)} required/>
            <input type= "password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required/>
            <input type= "text" value={name} placeholder="nome" onChange={e => setName(e.target.value)} required/>
            <input type= "text" value={image} placeholder="foto" onChange={e => setImage(e.target.value)} required/>
            <button type="submit"> Cadastrar </button>
        </form>
        <Link to="/" >
            <span> Já tem uma conta? Faça login! </span>
        </Link>
        </$container>
    )
}

export default Singup;