import {$container} from "./styles"
import UserContext from "../../context/UserContext";
import { useContext } from "react";

function Header() {

    const {userData, setUserData} = useContext(UserContext)

    return (
        <$container>
        <p>TrackIt</p>
        <img src={userData.image} alt={userData.image} />
        </$container>
        
        
    )
}

export default Header;
