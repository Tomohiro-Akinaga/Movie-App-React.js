import PropTypes from "prop-types";
import styles from "./Item.module.scss";
import { useNavigate } from "react-router";

function TrendingItem({ index, id, posterPath }) {
    const navigate = useNavigate();

    return (
        <li
            key={index}
            id={id}
            className={styles.item}
            onClick={() => navigate("/detailed", { state: id })}
        >
            <img src={posterPath} className={styles.poster} />
        </li>
    );
}

TrendingItem.propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    posterPath: PropTypes.string,
};

export default TrendingItem;
