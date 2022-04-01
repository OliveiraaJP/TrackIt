import { useState, useContext, useEffect } from "react";

import UserContext from "../../context/UserContext";
import HabitsContext from "../../context/HabitsContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import {
    $container,
    $navbar,
    $containerHabit,
    $boxName,
    $boxDays,
    $button,
    $getTodayBox,
} from "./styles";

function Habits() {
    const { userData, setUserData } = useContext(UserContext);
    const { habitsData, setHabitsData } = useContext(HabitsContext);

    const HABITS__API =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const [postName, setPostName] = useState("");
    const [postDays, setPostDays] = useState([]);

    const [allHabits, setAallHabits] = useState([]);

    console.log(postName);
    console.log(habitsData);
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`,
        },
    };

    function postHabitAPI() {
        const body = {
            name: postName,
            days: postDays,
        };

        const request = axios.post(HABITS__API, body, config);
        request.then((response) => {
            console.log(response);
            setPostDays([]);
            setPostName("");
        });
        request.catch((err) => {
            alert("Preencha os dados corretamente");
        });
    }

    function handleDays(number) {
        if (postDays.includes(number)) {
            const newArray = postDays.filter((el) => {
                if (number !== el) {
                    return el;
                }
            });
            setPostDays(newArray);
        } else {
            setPostDays([...postDays, number]);
        }
    }
    console.log(postDays);

    /* function noHabitText() {
        if (allHabits.length > 0) {
            allHabits.map((habitDay) => {
                return (
                    <$getTodayBox>
                        {" "}
                        <p>{habitDay.name}</p>{" "}
                    </$getTodayBox>
                );
            });
        } else {
            return "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";
        }
    } */

    useEffect(() => {
        const promise = axios.get(HABITS__API, config);
        promise.then((response) => {
            console.log(response);
            setAallHabits(response.data);
        });
        promise.catch((err) => console.log(err));
    }, []);

    console.log(allHabits);

    return (
        <>
            <Header />
            <$container>
                <$navbar>
                    <p>Meus hábitos</p>
                    <button> + </button>
                </$navbar>
                <$containerHabit>
                    <$boxName
                        placeholder="nome do hábito"
                        onChange={(e) => setPostName(e.target.value)}
                    />
                    <$boxDays>
                        <$button
                            selecionado={postDays.includes(7)}
                            onClick={() => handleDays(7)}
                        >
                            D
                        </$button>
                        <$button
                            selecionado={postDays.includes(1)}
                            onClick={() => handleDays(1)}
                        >
                            S
                        </$button>
                        <$button
                            selecionado={postDays.includes(2)}
                            onClick={() => handleDays(2)}
                        >
                            T
                        </$button>
                        <$button
                            selecionado={postDays.includes(3)}
                            onClick={() => handleDays(3)}
                        >
                            Q
                        </$button>
                        <$button
                            selecionado={postDays.includes(4)}
                            onClick={() => handleDays(4)}
                        >
                            Q
                        </$button>
                        <$button
                            selecionado={postDays.includes(5)}
                            onClick={() => handleDays(5)}
                        >
                            S
                        </$button>
                        <$button
                            selecionado={postDays.includes(6)}
                            onClick={() => handleDays(6)}
                        >
                            S
                        </$button>
                    </$boxDays>
                    <button className="cancel"> Cancelar </button>
                    <button className="save" onClick={postHabitAPI}>
                        Salvar
                    </button>
                </$containerHabit>

                <p>
                    {allHabits.length === 0
                        ? "oi"
                        : allHabits.map((habitDay) => {
                            return (
                                <$getTodayBox>{habitDay.name}</$getTodayBox>
                                )
                        })}
                </p>
            </$container>
            <Footer />
        </>
    );
}

export default Habits;
