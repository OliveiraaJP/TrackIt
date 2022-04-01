import { $container, $texts, $checkbox } from "./styles";
import { BsCheckSquareFill } from "react-icons/bs";
import { useContext } from "react";

import HabitsContext from "../../../context/HabitsContext";
import UserContext from "../../../context/UserContext";

function TodayHabitBox({
    titleHabit,
    sequenceCount,
    recordCount,
    isDone = false,
    
}) {

    const {userData} = useContext(UserContext)
    const{habitsData} = useContext(HabitsContext)

    function toggleDoneHabit (){
        console.log(userData);
        console.log(habitsData);
    }


    return (
        <$container>
            <$texts>
                <h1>{titleHabit}</h1>

                <h2>
                    Sequencia atual: <span>{sequenceCount} dias</span>{" "}
                </h2>

                <h2> Seu recorde: {recordCount} dias</h2>
            </$texts>

            <BsCheckSquareFill
                onClick={toggleDoneHabit}
                size="70px"
                color={isDone ? "#8FC549" : "#EBEBEB"}
            />
        </$container>
    );
}

export default TodayHabitBox;
