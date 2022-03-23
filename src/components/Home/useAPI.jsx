import mainMovieAPI from "../../api/mainMovieAPI";
import popularMovieAPI from "../../api/popularMovieAPI";
import topRatedMovieAPI from "../../api/topRatedMovieAPI";
import { useState, useEffect } from "react";

export default function useAPI() {
    const [mainMoviesData, setMainMoviesData] = useState();
    const [popularMoviesData, setPopularMoviesData] = useState();
    const [topRatedMoviesData, setTopRatedMoviesData] = useState();

    useEffect(() => {
        (async () => {
            const fetchMainMoviesData = await mainMovieAPI();
            const fetchPopularMoviesData = await popularMovieAPI();
            const fetchTopRatedMoviesData = await topRatedMovieAPI();
            setMainMoviesData(fetchMainMoviesData);
            setPopularMoviesData(fetchPopularMoviesData);
            setTopRatedMoviesData(fetchTopRatedMoviesData);
        })();
    }, []);

    return { mainMoviesData, popularMoviesData, topRatedMoviesData };
}
