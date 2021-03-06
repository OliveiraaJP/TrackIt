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
    toggleDoneHabit
}) {

    const {userData} = useContext(UserContext)
    const{habitsData} = useContext(HabitsContext)

    
    

    return (
        <$container>
            <$texts>
                <h1>{titleHabit}</h1>

                <h2>
                    Sequencia atual: <span>{sequenceCount} dias</span>
                </h2>
            {sequenceCount === recordCount && sequenceCount !== 0 && (<h2> Seu recorde: <span>{recordCount} dias</span></h2>)}
            {sequenceCount !== recordCount && (<h2> Seu recorde: {recordCount} dias </h2>)}
            {sequenceCount ===0 && recordCount === 0 && (<h2> Seu recorde: {recordCount} dias </h2>)}
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
