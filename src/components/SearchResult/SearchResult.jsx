import SearchResultStyle from "./SearchResult.module.scss";
import PropTypes from "prop-types";
import SearchResultItem from "./SearchResult-Item/SearchResultItem";
import Loading from "../../components/Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";
import useAPI from "./useAPI";

function SearchResult({ setSearch, searchKeyword, setMovieID, setDetailed }) {
    const [error, setError] = useState();
    const searchMoviesData = useAPI(searchKeyword);
    const moviesData = [];

    if (!searchMoviesData) {
        return null;
    }

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
        <>
            {/* {!searchMoviesData && <Loading />} */}
            <div className={SearchResultStyle.container}>
                <div className={SearchResultStyle.search}>
                    <h2 className={SearchResultStyle.heading}>Search result</h2>
                    <p className={SearchResultStyle.keyword}>{searchKeyword}</p>
                </div>
                {error && (
                    <p className={SearchResultStyle.errorMessage}>{error}</p>
                )}
                <ul className={SearchResultStyle.itemBox}>
                    {moviesData.map((item, index) => (
                        <SearchResultItem
                            key={index}
                            id={item.id}
                            posterPath={item.posterPath}
                            setMovieID={setMovieID}
                            setDetailed={setDetailed}
                            setSearch={setSearch}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}
SearchResult.propTypes = {
    searchMoviesData: PropTypes.object,
    searchKeyword: PropTypes.string,
};

export default SearchResult;
