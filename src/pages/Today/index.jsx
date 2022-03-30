import { useContext, useState, useEffect } from "react";
import axios from "axios";

import UserContext from "../../context/UserContext";

import Footer from "../../components/Footer";
import Header from "../../components/Header";




function Today (){

    const TODAY__API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const {userData, setUserData} = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(TODAY__API, config ) // post? (url, body, config)
        promise.then(response => {
            const {data} = response;
            console.log(data);
        });
        promise.catch(err => console.log(err.response));


    }, [])


    return(
        <>
        <Header/>
        <div>conteudo</div>
        <Footer/>
        </>
    )
}

export default Today;