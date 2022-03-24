import FooterStyle from "./Footer.module.scss";

export default function Footer() {
    const list = ["GitHub", "Blog", "LinkedIn", "YouTube"];
    return (
        <ul className={FooterStyle.container}>
            {list.map((item, index) => (
                <li key={index} className={FooterStyle.link}>{item}</li>
            ))}
        </ul>
    );
}
