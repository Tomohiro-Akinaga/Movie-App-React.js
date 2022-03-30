import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./Item.module.scss";

function UpComingItem({ index, id, posterPath }) {
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

UpComingItem.propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    posterPath: PropTypes.string,
};

export default UpComingItem;
