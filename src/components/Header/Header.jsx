import Logo from "../Header-Logo/Logo.jsx";
import Navigation from "../Header-Navigation/Navigation.jsx";
import HeaderStyle from "./Header.module.scss";

function Header() {
    return (
        <header className={HeaderStyle.header}>
            <Logo />
            <Navigation />
        </header>
    )
}

export default Header;