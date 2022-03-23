import mainMovieAPI from "../../api/mainMovieAPI";
import popularMovieAPI from "../../api/popularMovieAPI";
import { useState, useEffect } from "react";

export default function useAPI() {
    const [mainMoviesData, setMainMoviesData] = useState();
    const [popularMoviesData, setPopularMoviesData] = useState();

    useEffect(() => {
        (async () => {
            const fetchMainMoviesData = await mainMovieAPI();
            const fetchPopularMoviesData = await popularMovieAPI();
            setMainMoviesData(fetchMainMoviesData);
            setPopularMoviesData(fetchPopularMoviesData);
        })();
    }, []);

    return { mainMoviesData, popularMoviesData };
}
