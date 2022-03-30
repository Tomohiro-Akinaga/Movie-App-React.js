import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ItemStyle from "./Item.module.scss";

function PopularItem({ index, id, posterPath }) {
    const navigate = useNavigate();
    return (
        <li
            key={index}
            id={id}
            className={ItemStyle.item}
            onClick={() => navigate("/detailed", { state: id })}
        >
            <img src={posterPath} className={ItemStyle.poster} />
        </li>
    );
}

PopularItem.propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    posterPath: PropTypes.string,
};

export default PopularItem;
