import FavoriteStyle from "./Favorite.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Favorite() {
    return (
        <button className={FavoriteStyle.favoriteButton} type="button">
            <FontAwesomeIcon icon={faBookmark} className={FavoriteStyle.bookmark}/>
        </button>
    )
}

export default Favorite;