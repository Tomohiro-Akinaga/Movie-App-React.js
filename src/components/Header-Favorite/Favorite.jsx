import FavoriteStyle from "./Favorite.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Favorite() {
    return (
        <button className={FavoriteStyle.favorite} type="button">
            <FontAwesomeIcon icon={faBookmark} />
        </button>
    )
}

export default Favorite;