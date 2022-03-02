import Logo from "../Header-Logo/Logo.jsx";
import Navigation from "../Header-Navigation/Navigation.jsx";
import SearchBar from "../Header-SearchBar/SearchBar.jsx";
import Favorite from "../Header-Favorite/Favorite.jsx";
import HeaderStyle from "./Header.module.scss";

function Header() {
    return (
        <header className={HeaderStyle.header}>
            <Logo />
            <Navigation />
            <SearchBar />
            <Favorite />
        </header>
    )
}

export default Header;