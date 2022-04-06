import { useState, useContext, useEffect } from "react";

import UserContext from "../../context/UserContext";
import HabitsContext from "../../context/HabitsContext";
import axios from "axios";

import { ThreeDots, Oval } from "react-loader-spinner";

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
    $loadHabit
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
    const [sendHabitCooldown, setSendHabitCooldown] = useState(true)

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
        setSendHabitCooldown(!sendHabitCooldown)

        const request = axios.post(HABITS__API, body, config);
        request.then((response) => {
            console.log(response);
            setPostDays([]);
            setPostName("");
        });
        request.catch((err) => {
            alert("Preencha os dados corretamente");
        });
        request.finally(() => {
            setReloadPage([...reloadPage, Math.random()]);
            toggleBoxHabit()
            
            }
        )
    }

    function handleDays(number) {
        if (postDays.includes(number)) {
            const newArray = postDays.filter((el) => {
                if (number !== el) {
                    return true;
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
        setSendHabitCooldown(!sendHabitCooldown)
    }, [reloadPage]);

    console.log(allHabits);

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

    function deleteHabit(id){
        const boolean = window.confirm("Gostaria de apagar esse hábito")
        if(!boolean) return

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
                {toggleHabit && !sendHabitCooldown &&(
                <$containerHabit>
                    <$boxName
                        placeholder="nome do hábito"
                        value={postName}
                        onChange={(e) => setPostName(e.target.value)}
                    />
                    <$boxDays key={Math.random()}>
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
                    <button className="cancel" onClick={() => toggleBoxHabit()}> Cancelar </button>
                    <button className="save" onClick={postHabitAPI}>
                        Salvar
                    </button>
                </$containerHabit>
                )}

                {toggleHabit && sendHabitCooldown && (
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
                    <button disabled className="loadCancel"> Cancelar </button>
                    <button  disabled className="loadSave">
                        <ThreeDots color="#fff" height="40" width="40" />
                    </button>
                </$containerHabit>
                )}

                

                <div>
                    {!isLoaded && <$loadHabit>
                                        <Oval 
                                        strokeWidth={2} 
                                        color="#00BFFF" 
                                        secondaryColor="#126BA5" 
                                        height={300} 
                                        width={300} 
                                        />
                                    </$loadHabit>}


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
                                            return habitDay.days.includes(i) ? (
                                                <$button key={i} selecionado>{weekday}</$button>
                                                ) : (
                                                <$button key={i} >{weekday}</$button>
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
