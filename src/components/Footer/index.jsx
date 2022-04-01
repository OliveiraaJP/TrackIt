import { Link } from "react-router-dom";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { $container } from "./styles";

function Footer() {
    const percentage = 60;

    return (
        <$container>
            <Link to="/habitos" style={{ textDecoration: "none" }}>
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje" style={{ textDecoration: "none", width: "107px", marginBottom: "51px" }}>
                <div className="progressBar">
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={5}
                        styles={buildStyles({
                            textColor: "#fff",
                            backgroundColor: "#52B6FF",
                            textSize: "19px",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                </div>
            </Link>
            <Link to="/historico" style={{ textDecoration: "none" }}>
                <p>Histórico</p>
            </Link>
        </$container>
    );
}

export default Footer;
