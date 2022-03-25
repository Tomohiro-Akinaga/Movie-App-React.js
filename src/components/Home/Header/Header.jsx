import HeaderStyle from "./Header.module.scss";
import { useNavigate } from "react-router";
import Navigation from "./Header-Navigation/Navigation";
import SearchBar from "./Header-SearchBar/SearchBar";
import Account from "./Header-Account/Account";
import PropTypes from "prop-types";

function Header({ setSearch, setSearchKeyword }) {

    const navigate = useNavigate();
    return (
        <header className={HeaderStyle.container}>
            <div className={HeaderStyle.left}>
                <h1 className={HeaderStyle.logo} onClick={() => window.location.reload()}>
                    Movieflex
                </h1>
                <Navigation />
            </div>
            <div className={HeaderStyle.right}>
                <SearchBar
                    setSearch={setSearch}
                    setSearchKeyword={setSearchKeyword}
                />
                <Account />
            </div>
        </header>
    );
}

Header.propTypes = {
    setSearch: PropTypes.func,
    setSearchKeyword: PropTypes.func,
};

export default Header;
