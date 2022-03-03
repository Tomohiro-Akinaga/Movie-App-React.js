import SearchBarStyle from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    return (
        <form className={SearchBarStyle.container}>
            <input type="text" className={SearchBarStyle.inputText} placeholder="Titles, people, genre" />
            <button type="button" className={SearchBarStyle.searchButton}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={SearchBarStyle.magnifyingGlass}/>
            </button>
        </form>
    )
}

export default SearchBar;