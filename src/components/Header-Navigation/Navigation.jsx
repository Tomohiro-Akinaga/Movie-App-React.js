import NavigationStyle from "./Navigation.module.scss";

function Navigation() {
    return (
        <nav>
            <ul className={NavigationStyle.navigation}>
                <li className={NavigationStyle.list}>list</li>
                <li className={NavigationStyle.list}>list</li>
                <li className={NavigationStyle.list}>list</li>
                <li className={NavigationStyle.list}>list</li>
            </ul>
        </nav>
    )
}

export default Navigation;