import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const genre = ["TV Movie", "Music", "Drama", "Comedy"];

export default function Navigation() {
    return (
        <nav className={styles.container}>
            <div className={styles.accordion}>
                <p className={styles.heading}>Genre</p>
                <button className={styles.triangleButton}>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        className={styles.buttonIcon}
                    />
                </button>
            </div>
            <ul className={styles.listBar}>
                <li className={`${styles.list} ${styles.active}`}>Home</li>
                {genre.map((item, index) => (
                    <li key={index} className={styles.list}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
