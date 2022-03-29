import { useState, useEffect } from "react";
import detailedMovieAPI from "../../api/detailedMovieAPI";

export default function useAPI(movieID) {
    const [detailedMoviesData, setDetailedMoviesData] = useState();

    useEffect(() => {
        (async () => {
            const fetchDetailedMoviesData = await detailedMovieAPI(movieID);

            setDetailedMoviesData(fetchDetailedMoviesData);
        })();
    }, [movieID]);

    return detailedMoviesData;
}
