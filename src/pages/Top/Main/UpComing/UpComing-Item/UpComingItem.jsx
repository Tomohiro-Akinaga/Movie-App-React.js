import PropTypes from "prop-types";
import ItemStyle from "./Item.module.scss";

function UpComingItem({ index, id, posterPath }) {
    return (
        <li key={index} id={id} className={ItemStyle.item}>
            <img src={posterPath} className={ItemStyle.poster} />
        </li>
    );
}

UpComingItem.propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    posterPath: PropTypes.string,
};

export default UpComingItem;
