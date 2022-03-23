import { useState, useEffect } from "react";
import mainMovieAPI from "../../api/mainMovieAPI";
import popularMovieAPI from "../../api/popularMovieAPI";
import topRatedMovieAPI from "../../api/topRatedMovieAPI";
import nowPlayingMovieAPI from "../../api/nowPlayingMovieAPI";
import upComingMovieAPI from "../../api/upComingMovieAPI";

export default function useAPI() {
    const [mainMoviesData, setMainMoviesData] = useState();
    const [popularMoviesData, setPopularMoviesData] = useState();
    const [topRatedMoviesData, setTopRatedMoviesData] = useState();
    const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState();
    const [upComingMoviesData, setUpComingMoviesData] = useState();

    useEffect(() => {
        (async () => {
            const fetchMainMoviesData = await mainMovieAPI();
            const fetchPopularMoviesData = await popularMovieAPI();
            const fetchTopRatedMoviesData = await topRatedMovieAPI();
            const fetchNowplayingMovieData = await nowPlayingMovieAPI();
            const fetchUpComingMovieData = await upComingMovieAPI();
            setMainMoviesData(fetchMainMoviesData);
            setPopularMoviesData(fetchPopularMoviesData);
            setTopRatedMoviesData(fetchTopRatedMoviesData);
            setNowPlayingMoviesData(fetchNowplayingMovieData);
            setUpComingMoviesData(fetchUpComingMovieData);
        })();
    }, []);

    return {
        mainMoviesData,
        popularMoviesData,
        topRatedMoviesData,
        nowPlayingMoviesData,
        upComingMoviesData,
    };
}
