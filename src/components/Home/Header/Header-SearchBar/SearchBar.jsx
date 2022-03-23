import SearchBarStyle from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
        <form className={SearchBarStyle.container}>
            <button className={SearchBarStyle.searchButton}>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={SearchBarStyle.buttonIcon}
                />
            </button>
            <input
                className={SearchBarStyle.inputBox}
                type="text"
                placeholder="Titles,  people,  genre"
            />
        </form>
    );
}
