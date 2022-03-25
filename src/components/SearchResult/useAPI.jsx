import { useState, useEffect } from "react";
import searchMovieAPI from "../../api/searchMovieAPI";

export default function useAPI(searchKeyword) {
    const [searchMoviesData, setSearchMoviesData] = useState();

    useEffect(() => {
        (async () => {
            const fetchSearchMoviesData = await searchMovieAPI(searchKeyword);

            setSearchMoviesData(fetchSearchMoviesData);
        })();
    }, [searchKeyword]);

    return searchMoviesData;
}
