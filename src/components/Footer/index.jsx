import { Link } from "react-router-dom";

import { $container } from "./styles";

function Footer() {
    return (
        <$container>
            <Link to="/habitos" style={{textDecoration:'none'}}>
                <p>Hábitos</p>
            </Link>
            <div>SPINNER</div>
            <Link to="/historico" style={{textDecoration:'none'}}>
                <p>Histórico</p>
            </Link>
        </$container>
    );
}

export default Footer;
