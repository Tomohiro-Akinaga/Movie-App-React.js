import SearchBarStyle from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    return (
        <form className={SearchBarStyle.container}>
            <input type="text" className={SearchBarStyle.text}/>
            <button type="button" className={SearchBarStyle.button}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}

export default SearchBar;