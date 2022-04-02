import { useContext, useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

import {$main, $date} from "./styles"

import UserContext from "../../context/UserContext";
import HabitsContext from "../../context/HabitsContext";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TodayHabitBox from "./TodayHabitBox";

function Today() {
    const TODAY__API =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const { userData, setUserData } = useContext(UserContext);
    const { habitsData, setHabitsData } = useContext(HabitsContext);

    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`,
        },
    };

    require("dayjs/locale/pt-br");
	const date = dayjs().locale("pt-br").format("dddd, DD/MM");
	const dayIndex = dayjs().day();

    useEffect(() => {
        const promise = axios.get(TODAY__API, config); // post? (url, body, config)
        promise.then((response) => {
            const { data } = response;
            setHabitsData(data);
        });
        promise.catch((err) => console.log(err.response));
    }, [userData]);

    console.log(habitsData);

    function toggleHabit(id){
        console.log(id);
    }

    return (
        <>
            <Header />
            <$main>
            <$date>
            {date}
            <p>Nenhum hábito concluído ainda</p>
            </$date>
                {habitsData.length > 0 ? (
                    habitsData.map((habit, i) => {
                        return (
                                <TodayHabitBox
                                    toggleDoneHabit={() => toggleHabit(habit.id)}
                                    key={i}
                                    titleHabit={habit.name}
                                    sequenceCount={habit.currentSequence}
                                    recordCount={habit.highestSequence}                                
                                    isDone
                                />
                        );
                    })
                ) : (
                    <></>
                )}
            </$main>
            <Footer />
        </>
    );
}

export default Today;
