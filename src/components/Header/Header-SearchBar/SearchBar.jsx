import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";

function SearchBar() {
    const navigate = useNavigate();
    const [keyword, setKeword] = useState("");

    const handleChange = (e) => {
        setKeword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search-result", { state: keyword });
    };

    return (
        <form
            type="submit"
            className={styles.container}
            onSubmit={handleSubmit}
        >
            <button type="submit" className={styles.searchButton}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.buttonIcon}
                />
            </button>
            <input
                value={keyword}
                className={styles.inputBox}
                type="text"
                placeholder="Titles,  people,  genre"
                onChange={handleChange}
            />
        </form>
    );
}

export default SearchBar;
