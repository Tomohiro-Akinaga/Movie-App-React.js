import NavigationStyle from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
    return (
        <nav className={NavigationStyle.container}>
            <div className={NavigationStyle.accordion}>
                <p className={NavigationStyle.heading}>Genre</p>
                <button className={NavigationStyle.triangleButton}>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={NavigationStyle.buttonIcon}
                    />
                </button>
            </div>
            <ul className={NavigationStyle.listBar}>
                <li
                    className={`${NavigationStyle.list} ${NavigationStyle.active}`}
                >
                    Home
                </li>
                <li className={NavigationStyle.list}>TV Movie</li>
                <li className={NavigationStyle.list}>Music</li>
                <li className={NavigationStyle.list}>Drama</li>
                <li className={NavigationStyle.list}>Comedy</li>
            </ul>
        </nav>
    );
}
