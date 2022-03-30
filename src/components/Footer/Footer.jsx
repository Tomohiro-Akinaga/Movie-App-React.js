import styles from "./Footer.module.scss";

export default function Footer() {
    const list = [
        { name: "GitHub", url: "https://github.com/Tomohiro-Akinaga" },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/tomohiro-akinaga-b7b30a175/",
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/channel/UC700Xq2XEMK_a1OHL88lrJg",
        },
        { name: "Blog", url: "https://medium.com/@tomohiroakinaga" },
    ];
    return (
        <footer>
            <ul className={styles.container}>
                {list.map((item, index) => (
                    <a
                        href={item.url}
                        key={index}
                        className={styles.link}
                        target="_blank"
                    >
                        {item.name}
                    </a>
                ))}
            </ul>
        </footer>
    );
}
