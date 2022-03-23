import PropTypes from "prop-types";
import TopRatedItem from "./TopRated-Item/TopRatedItem";
import TopRatedStyle from "./TopRated.module.scss";

function TopRated({ topRatedMoviesData }) {
    const moviesData = [];

    topRatedMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={TopRatedStyle.container}>
            <h3 className={TopRatedStyle.heading}>TopRated</h3>
            <ul className={TopRatedStyle.popular}>
                {moviesData.map((item, index) => (
                    <TopRatedItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                    />
                ))}
            </ul>
        </div>
    );
}

TopRated.propTypes = {
    topRatedMoviesData: PropTypes.object,
};

export default TopRated;
