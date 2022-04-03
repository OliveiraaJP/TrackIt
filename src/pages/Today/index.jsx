import { useContext, useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

import {$main, $date} from "./styles"

import UserContext from "../../context/UserContext";
import HabitsContext from "../../context/HabitsContext";
import CountContext from "../../context/CountContext"

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TodayHabitBox from "./TodayHabitBox";

function Today() {
    const TODAY__API =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const { userData, setUserData } = useContext(UserContext);
    const { habitsData, setHabitsData } = useContext(HabitsContext);
    const {countData, setCountData} = useContext(CountContext);
    const {percentageData, setPercentageData} = useContext(CountContext);


    const [reloadPage, setReloadPage] = useState([])

    // setReloadPage([...reloadPage, Math.random()]);

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
            setCountData(data.filter((habit) => habit.done).length); 
            setPercentageData(data.filter((habit) => habit.done).length / data.length)
        });
        promise.catch((err) => console.log(err.response));
        
    }, [userData, reloadPage]);


    

    function checkHabit(id){
        const CHECK__API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const request = axios.post(CHECK__API, [],config)
        request.then(response => console.log(response))
        request.catch(err => console.log(err.response))
        request.finally(() => setReloadPage([...reloadPage, Math.random()]))

    }

    function uncheckHabit(id){
        const UNCHECK__API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        const request = axios.post(UNCHECK__API, [] ,config)
        request.then(response => console.log(response))
        request.catch(err => console.log(err.response))
        request.finally(() => setReloadPage([...reloadPage, Math.random()]))

    }

    return (
        <>
            <Header />
            <$main>
            <$date>
            {date}
            {percentageData === 0 && (<p>Nenhum hábito concluído ainda</p>)}
            {percentageData !== 0 && (<p className="green">{parseInt(percentageData * 100)}% dos hábitos concluídos</p>)}
            </$date>
                {habitsData.length > 0 ? (
                    habitsData.map((habit, i) => {
                        if(habit.done === false){
                            return(
                                <TodayHabitBox
                                    toggleDoneHabit={() => checkHabit(habit.id)}
                                    key={i}
                                    titleHabit={habit.name}
                                    sequenceCount={habit.currentSequence}
                                    recordCount={habit.highestSequence}                                
                                />
                            )
                        }
                        if(habit.done === true){
                            return(
                                <TodayHabitBox
                                    toggleDoneHabit={() => uncheckHabit(habit.id)}
                                    key={i}
                                    titleHabit={habit.name}
                                    sequenceCount={habit.currentSequence}
                                    recordCount={habit.highestSequence}                                
                                    isDone
                                />
                            )
                        }
                
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
