import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!value) {
        //     return;
        // }
    };

    return (
        <form
            type="submit"
            className={styles.container}
            // onSubmit={handleSubmit}
        >
            <button type="submit" className={styles.searchButton}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.buttonIcon}
                />
            </button>
            <input
                className={styles.inputBox}
                type="text"
                placeholder="Titles,  people,  genre"
                // onChange={handleChange}
            />
        </form>
    );
}

export default SearchBar;
