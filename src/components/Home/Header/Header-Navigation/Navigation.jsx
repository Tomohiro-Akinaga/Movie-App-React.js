import NavigationStyle from "./Navigation.module.scss";

export default function Navigation() {
    return (
        <nav className={NavigationStyle.container}>
            <p>Home</p>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>New &amp; Popular</p>
        </nav>
    );
}
