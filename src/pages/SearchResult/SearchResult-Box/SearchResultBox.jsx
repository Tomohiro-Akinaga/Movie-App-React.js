import styles from "./SearchResultBox.module.scss";
import PropTypes from "prop-types";
import SearchResultItem from "./SearchResult-Item/SearchResultItem";
import { useState, useEffect } from "react";

function SearchResultBox({ moviesData, searchKeyword }) {
    const [error, setError] = useState();

    useEffect(() => {
        moviesData.length === 0 && setError("No Movie");
        moviesData.length > 0 && setError();
    }, [moviesData]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.search}>
                    <h2 className={styles.heading}>Search result</h2>
                    <p className={styles.keyword}>{searchKeyword}</p>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
                <ul className={styles.itemBox}>
                    {moviesData.map((item, index) => (
                        <SearchResultItem
                            key={index}
                            id={item.id}
                            posterPath={item.posterPath}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

SearchResultBox.propTypes = {
    moviesData: PropTypes.array,
    searchKeyword: PropTypes.string,
};

export default SearchResultBox;
