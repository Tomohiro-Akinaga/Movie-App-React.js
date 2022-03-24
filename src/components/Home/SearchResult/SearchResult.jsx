import SearchResultStyle from "./SearchResult.module.scss";
import PropTypes from "prop-types";
import SearchResultItem from "./SearchResult-Item/SearchResultItem";

function SearchResult({ searchMoviesData }) {
    const moviesData = [];

    searchMoviesData.results.map((item) => {
        if (item.poster_path === null) {
            return;
        }
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={SearchResultStyle.container}>
            <ul className={SearchResultStyle.itemBox}>
                {moviesData.map((item) => (
                    <SearchResultItem
                        id={item.id}
                        posterPath={item.posterPath}
                    />
                ))}
            </ul>
        </div>
    );
}
SearchResult.propTypes = {
    searchMoviesData: PropTypes.object,
};

export default SearchResult;
