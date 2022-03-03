import NavigationStyle from "./Navigation.module.scss";

function Navigation() {
    return (
        <nav className={NavigationStyle.navigation}>
            <ul className={NavigationStyle.lists}>
                <li className={`${NavigationStyle.list} ${NavigationStyle.active}`} >Home</li>
                <li className={NavigationStyle.list}>TV Shows</li>
                <li className={NavigationStyle.list}>Movies</li>
                <li className={NavigationStyle.list}>New &amp; Popular</li>
            </ul>
        </nav>
    )
}

export default Navigation;