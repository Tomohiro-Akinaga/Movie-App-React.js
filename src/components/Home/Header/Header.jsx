import HeaderStyle from "./Header.module.scss";
import Navigation from "./Header-Navigation/Navigation";
import SearchBar from "./Header-SearchBar/SearchBar";
import Account from "./Header-Account/Account";

export default function Header() {
    return (
        <header className={HeaderStyle.container}>
            <div className={HeaderStyle.left}>
                <h1 className={HeaderStyle.logo}>Movieflex</h1>
                <Navigation />
            </div>
            <div className={HeaderStyle.right}>
                <SearchBar />
                <Account />
            </div>
        </header>
    );
}
