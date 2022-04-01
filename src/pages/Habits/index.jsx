import { useState, useContext, useEffect } from "react";

import UserContext from "../../context/UserContext";
import HabitsContext from "../../context/HabitsContext";
import axios from "axios";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import {
    $container,
    $navbar,
    $containerHabit,
    $boxName,
    $boxDays,
} from "./styles";

function Habits() {

    const {userData, setUserData} = useContext(UserContext)
    //const {habitsData, setHabitsData} = useContext(HabitsContext)

    const HABITS__API =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    

    const [postName, setPostName] = useState("");
    const [postDays, setPostDays] = useState([])

    const [get, setGet] = useState({});

    console.log(postName);

    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }

    function postHabitAPI(){

        const body = {
            name: postName,
            days: postDays
        }

        const request = axios.post(HABITS__API, body, config)
        request.then(response => console.log(response));
        request.catch(err => console.log(err));

    }

    function noHabitText() {
        if (get.length > 0) {
            return "";
        }
        return "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";
    }

function handleDays(number) {
    if(postDays.includes(number)){
        const newArray = postDays.filter(el => {
            if (number !== el){
                return el
            }
        })
        setPostDays(newArray)
    } else{
        setPostDays([...postDays, number])
    }
}
console.log(postDays);


useEffect(() => {

    const promise = axios.get(HABITS__API, config)
    promise.then(response => console.log(response))
    promise.catch(err => console.log(err))

}, [])



    return (
        <>
            <Header />
            <$container>
                <$navbar>
                    <p>Meus hábitos</p>
                    <button > + </button>
                </$navbar>
                <$containerHabit>
                    <$boxName placeholder="nome do hábito" onChange={e => setPostName(e.target.value)}/>
                    <$boxDays>
                        <div onClick={() => handleDays(7)}>D</div>
                        <div onClick={() => handleDays(1)}>S</div>
                        <div onClick={() => handleDays(2)}>T</div>
                        <div onClick={() => handleDays(3)}>Q</div>
                        <div onClick={() => handleDays(4)}>Q</div>
                        <div onClick={() => handleDays(5)}>S</div>
                        <div onClick={() => handleDays(6)}>S</div>
                    </$boxDays>
                    <button className="cancel"> Cancelar </button>
                    <button className="save" onClick={postHabitAPI}>Salvar</button>
                </$containerHabit>

                <p>{noHabitText()}</p>
            </$container>
            <Footer />
        </>
    );
}

export default Habits;
