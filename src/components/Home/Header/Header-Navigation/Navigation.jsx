import NavigationStyle from "./Navigation.module.scss";

export default function Navigation() {
    return (
        <nav className={NavigationStyle.container}>
            <p className={`${NavigationStyle.list} ${NavigationStyle.active}`}>Home</p>
            <p className={NavigationStyle.list}>TV Shows</p>
            <p className={NavigationStyle.list}>Movies</p>
            <p className={NavigationStyle.list}>New &amp; Popular</p>
        </nav>
    );
}
