import PropTypes from "prop-types";
import TrendingItem from "./Trending-Item/TrendingItem";
import TrendingStyle from "./Trending.module.scss";

function Trending({ trendingMoviesData }) {
    const moviesData = [];

    trendingMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={TrendingStyle.container}>
            <h3 className={TrendingStyle.heading}>Trending</h3>
            <ul className={TrendingStyle.trending}>
                {moviesData.map((item, index) => (
                    <TrendingItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                    />
                ))}
            </ul>
        </div>
    );
}

Trending.propTypes = {
    trendingMoviesData: PropTypes.object,
};

export default Trending;
