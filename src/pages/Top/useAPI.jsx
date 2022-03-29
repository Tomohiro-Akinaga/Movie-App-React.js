import { useState, useEffect } from "react";
import mainMovieAPI from "../../api/mainMovieAPI";
import popularMovieAPI from "../../api/popularMovieAPI";
import topRatedMovieAPI from "../../api/topRatedMovieAPI";
import nowPlayingMovieAPI from "../../api/nowPlayingMovieAPI";
import upComingMovieAPI from "../../api/upComingMovieAPI";
import trendingMovieAPI from "../../api/trendingMovieAPI";

export default function useAPI() {
    const [mainMoviesData, setMainMoviesData] = useState();
    const [popularMoviesData, setPopularMoviesData] = useState();
    const [topRatedMoviesData, setTopRatedMoviesData] = useState();
    const [nowPlayingMoviesData, setNowPlayingMoviesData] = useState();
    const [upComingMoviesData, setUpComingMoviesData] = useState();
    const [trendingMoviesData, setUpTrendingMoviesData] = useState();

    useEffect(() => {
        let unmounted = false;

        (async () => {
            const fetchMainMoviesData = await mainMovieAPI();
            const fetchPopularMoviesData = await popularMovieAPI();
            const fetchTopRatedMoviesData = await topRatedMovieAPI();
            const fetchNowplayingMovieData = await nowPlayingMovieAPI();
            const fetchUpComingMovieData = await upComingMovieAPI();
            const fetchTrendingMovieData = await trendingMovieAPI();
            if (!unmounted) {
                setMainMoviesData(fetchMainMoviesData);
                setPopularMoviesData(fetchPopularMoviesData);
                setTopRatedMoviesData(fetchTopRatedMoviesData);
                setNowPlayingMoviesData(fetchNowplayingMovieData);
                setUpComingMoviesData(fetchUpComingMovieData);
                setUpTrendingMoviesData(fetchTrendingMovieData);
            }
        })();
        return () => {
            unmounted = true;
        };
    }, []);

    return {
        mainMoviesData,
        popularMoviesData,
        topRatedMoviesData,
        nowPlayingMoviesData,
        upComingMoviesData,
        trendingMoviesData,
    };
}
