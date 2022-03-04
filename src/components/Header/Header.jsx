import Logo from "../Header-Logo/Logo.jsx";
import Navigation from "../Header-Navigation/Navigation.jsx";
import SearchBar from "../Header-SearchBar/SearchBar.jsx";
import Favorite from "../Header-Favorite/Favorite.jsx";
import HeaderStyle from "./Header.module.scss";

function Header() {
    return (
        <header className={HeaderStyle.header}>
            <div className={HeaderStyle.headerLeft}>
                <Logo />
                <Navigation />
            </div>
            <div className={HeaderStyle.headerRight}>
                <SearchBar />
                <Favorite />
            </div>
        </header>
    )
}

export default Header;