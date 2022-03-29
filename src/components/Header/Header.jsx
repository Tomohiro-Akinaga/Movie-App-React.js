import styles from "./Header.module.scss";
import Logo from "./Header-Logo/Logo";
import Navigation from "./Header-Navigation/Navigation";
import SearchBar from "./Header-SearchBar/SearchBar";
import Account from "./Header-Account/Account";

function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.left}>
                <Logo />
                <Navigation />
            </div>
            <div className={styles.right}>
                <SearchBar />
                <Account />
            </div>
        </header>
    );
}

export default Header;
