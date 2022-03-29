import styles from "./Footer.module.scss";

export default function Footer() {
    const list = ["GitHub", "LinkedIn", "Blog", "YouTube"];
    return (
        <footer>
            <ul className={styles.container}>
                {list.map((item, index) => (
                    <li key={index} className={styles.link}>
                        {item}
                    </li>
                ))}
            </ul>
        </footer>
    );
}
