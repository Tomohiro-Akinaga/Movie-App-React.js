import { useNavigate } from "react-router";
import styles from "./Logo.module.scss";

function Logo() {
    const navigate = useNavigate();
    return (
        <h1 className={styles.logo} onClick={() => navigate("/")}>
            Movieflex
        </h1>
    );
}

export default Logo;
