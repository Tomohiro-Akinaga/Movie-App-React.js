import HeaderStyle from "./Header.module.scss";
import Navigation from "./Header-Navigation/Navigation";
import SearchBar from "./Header-SearchBar/SearchBar";
import Account from "./Header-Account/Account";

export default function Header() {
    return (
        <header className={HeaderStyle.container}>
            <h1 className={HeaderStyle.logo}>Movieflex</h1>
            <Navigation />
            <SearchBar />
            <Account />
        </header>
    );
}
