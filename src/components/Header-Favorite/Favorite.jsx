import FavoriteStyle from "./Favorite.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function Favorite() {
    return (
        <button className={FavoriteStyle.favoriteButton} type="button">
            <FontAwesomeIcon icon={faList} className={FavoriteStyle.bookmark}/>
        </button>
    )
}

export default Favorite;