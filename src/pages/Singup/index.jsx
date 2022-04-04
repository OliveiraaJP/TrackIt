import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Logo from "../../assets/logo-trackit.png"

import {$container} from "./styles"

function Singup(){

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)



    function singup(event){
        event.preventDefault()
        setLoading(!loading)
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
            navigate("/")
            
        });
        request.catch(err => {
            if(err.status === 409){
                window.alert("Usuário e/ou email já registrado(s)")
                setLoading(false)
            } else {
                window.alert("Por favor preencha corretamente o formulário")
                setLoading(false)
            }
        })
        
    }


    return(
        <$container>
        <img src={Logo} alt="" />
        <p>TrackIt</p>
        {!loading && (
        <form onSubmit={singup}>
            <input type="email" value={email} placeholder = "email" onChange={e => setEmail(e.target.value)} required/>
            <input type= "password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required/>
            <input type= "text" value={name} placeholder="nome" onChange={e => setName(e.target.value)} required/>
            <input type= "url" value={image} placeholder="foto" onChange={e => setImage(e.target.value)} required/>
            <button type="submit"> Cadastrar </button>
        </form>
        )}
        {loading && (
        <form>
            <input className="load" type="email" value={email} placeholder = "email" onChange={e => setEmail(e.target.value)} required/>
            <input className="load" type= "password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} required/>
            <input className="load" type= "text" value={name} placeholder="nome" onChange={e => setName(e.target.value)} required/>
            <input className="load" type= "text" value={image} placeholder="foto" onChange={e => setImage(e.target.value)} required/>
            <button disabled type="submit" className="load"> <ThreeDots color="#fff" height="40" width="40" /> </button>
        </form>
        )}

        <Link to="/" >
            <span> Já tem uma conta? Faça login! </span>
        </Link>
        </$container>
    )
}

export default Singup;