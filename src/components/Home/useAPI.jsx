import mainMovieAPI from "../../api/mainMovieAPI";
import popularMovieAPI from "../../api/popularMovieAPI";
import topRatedMovieAPI from "../../api/topRatedMovieAPI";
import { useState, useEffect } from "react";
import nowPlayingMovieAPI from "../../api/nowPlayingMovieAPI";

export default function useAPI() {
    const [mainMoviesData, setMainMoviesData] = useState();
    const [popularMoviesData, setPopularMoviesData] = useState();
    const [topRatedMoviesData, setTopRatedMoviesData] = useState();
    const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState();

    useEffect(() => {
        (async () => {
            const fetchMainMoviesData = await mainMovieAPI();
            const fetchPopularMoviesData = await popularMovieAPI();
            const fetchTopRatedMoviesData = await topRatedMovieAPI();
            const fetchNowplayingMovieData = await nowPlayingMovieAPI();
            setMainMoviesData(fetchMainMoviesData);
            setPopularMoviesData(fetchPopularMoviesData);
            setTopRatedMoviesData(fetchTopRatedMoviesData);
            setNowPlayingMoviesData(fetchNowplayingMovieData);
        })();
    }, []);

    return {
        mainMoviesData,
        popularMoviesData,
        topRatedMoviesData,
        nowPlayingMoviesData,
    };
}
