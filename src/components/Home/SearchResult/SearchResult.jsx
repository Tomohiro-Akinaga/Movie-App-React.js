import SearchResultStyle from "./SearchResult.module.scss";
import PropTypes from "prop-types";
import SearchResultItem from "./SearchResult-Item/SearchResultItem";
import { useState } from "react";

function SearchResult({ searchMoviesData }) {
    const [error, setError] = useState();

    if (searchMoviesData.total_results === 1) {
        return null;
    }

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
            {error && <p>{error}</p>}
            <ul className={SearchResultStyle.itemBox}>
                {moviesData.map((item, index) => (
                    <SearchResultItem
                        key={index}
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
