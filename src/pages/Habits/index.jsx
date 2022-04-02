import { useState, useContext, useEffect } from "react";

import UserContext from "../../context/UserContext";
import HabitsContext from "../../context/HabitsContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import garbageImage from "../../assets/garbage.png"


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
    const [isLoaded, setIsLoaded] = useState(false);
    const[reloadPage, setReloadPage] = useState([])
    const [toggleHabit, setToggleHabit] = useState(false)

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
        request.finally(() => setReloadPage([...reloadPage, Math.random()]))
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

    useEffect(() => {
        const promise = axios.get(HABITS__API, config);
        promise.then((response) => {
            console.log(response);
            setAallHabits(response.data);
        });
        promise.catch((err) => console.log(err));

        promise.finally(() => setIsLoaded(true));
    }, [reloadPage]);

    console.log(allHabits);

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

    function deleteHabit(id){
        const DELETE__API =
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

        const request = axios.delete(DELETE__API, config)
        request.then(response => console.log(response))
        request.catch(err => console.log(err.response))
        request.finally(() => setReloadPage([...reloadPage, id]))
    }

    function toggleBoxHabit(){
        setToggleHabit(!toggleHabit)
        console.log(toggleHabit);
    }


    return (
        <>
            <Header />
            <$container>
                <$navbar>
                    <p>Meus hábitos</p>
                    <button onClick={() => toggleBoxHabit()}> + </button>
                </$navbar>
                {toggleHabit && (
                <$containerHabit>
                    <$boxName
                        placeholder="nome do hábito"
                        value={postName}
                        onChange={(e) => setPostName(e.target.value)}
                    />
                    <$boxDays>
                        {["D", "S", "T", "Q", "Q", "S", "S"].map(
                            (day, index) => (
                                <$button
                                    key={index}
                                    selecionado={postDays.includes(index)}
                                    onClick={() => handleDays(index)}
                                >
                                    {day}
                                </$button>
                            )
                        )}
                    </$boxDays>
                    <button className="cancel"> Cancelar </button>
                    <button className="save" onClick={postHabitAPI}>
                        Salvar
                    </button>
                </$containerHabit>
                )}

                <div>
                    {!isLoaded && "carregando"}
                    {isLoaded &&
                        (
                            allHabits.length === 0
                                ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
                                : allHabits.map((habitDay, i) => {
                                    return (
                                        <span key={i}>
                                        <$getTodayBox key={i+100}>
                                            <p>{habitDay.name}</p>
                                        <$boxDays>
                                        {weekdays.map((weekday, i) => {
                                            return i === habitDay.days ? (
                                                <$button  selecionado>{weekday}</$button>
                                                ) : (
                                                <$button >{weekday}</$button>
                                                )
                                            })}
                                        </$boxDays>
                                        <img src={garbageImage} alt="garbage icon" onClick={() => deleteHabit(habitDay.id)}/>
                                        </$getTodayBox>
                                        </span>
                                    );
                                }
                            )
                        )
                    }
                </div>
            </$container>
            <Footer />
        </>
    );
}

export default Habits;
