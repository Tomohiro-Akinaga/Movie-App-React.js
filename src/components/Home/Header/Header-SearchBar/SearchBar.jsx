import SearchBarStyle from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

function SearchBar({ setSearch, setSearchKeyword }) {
    const navigate = useNavigate();
    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) {
            return;
        }
        setSearchKeyword(value);
        setSearch(true);
    };

    return (
        <form
            type="submit"
            className={SearchBarStyle.container}
            onSubmit={handleSubmit}
        >
            <button type="submit" className={SearchBarStyle.searchButton}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={SearchBarStyle.buttonIcon}
                />
            </button>
            <input
                className={SearchBarStyle.inputBox}
                type="text"
                placeholder="Titles,  people,  genre"
                onChange={handleChange}
            />
        </form>
    );
}

SearchBar.propTypes = {
    setSearch: PropTypes.func,
    setSearchKeyword: PropTypes.func,
};

export default SearchBar;
