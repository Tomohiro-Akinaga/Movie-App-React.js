import PropTypes from "prop-types";
import ItemStyle from "./Item.module.scss";

function TopRatedItem({ index, id, posterPath }) {
    return (
        <li key={index} id={id} className={ItemStyle.item}>
            <img src={posterPath} className={ItemStyle.poster} />
        </li>
    );
}

TopRatedItem.propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    posterPath: PropTypes.string,
};

export default TopRatedItem;