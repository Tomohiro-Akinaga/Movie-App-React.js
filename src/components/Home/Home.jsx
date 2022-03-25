import useAPI from "./useAPI";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import NowPlaying from "./NowPlaying/NowPlaying";
import UpComing from "./UpComing/UpComing";
import Trending from "./Trending/Trending";
import SearchResult from "../SearchResult/SearchResult";
import Footer from "./Footer/Footer";
import Loading from "../Loading/Loading";
import { useState } from "react";
import Detailed from "../Detailed/Detailed";

function Home({ movieID, setMovieID, setSearchKeyword, searchKeyword }) {
    const [search, setSearch] = useState(false);
    const [detailed, setDetailed] = useState(false);

    const {
        mainMoviesData,
        popularMoviesData,
        topRatedMoviesData,
        nowPlayingMoviesData,
        upComingMoviesData,
        trendingMoviesData,
    } = useAPI();

    return (
        <>
            {!trendingMoviesData && <Loading />}
            <Header setSearch={setSearch} setSearchKeyword={setSearchKeyword} />
            {!search && !detailed && (
                <>
                    {mainMoviesData && (
                        <Main
                            mainMoviesData={mainMoviesData}
                            setMovieID={setMovieID}
                            setDetailed={setDetailed}
                        />
                    )}
                    {popularMoviesData && (
                        <Popular
                            popularMoviesData={popularMoviesData}
                            setMovieID={setMovieID}
                            setDetailed={setDetailed}
                        />
                    )}
                    {topRatedMoviesData && (
                        <TopRated
                            topRatedMoviesData={topRatedMoviesData}
                            setMovieID={setMovieID}
                            setDetailed={setDetailed}
                        />
                    )}
                    {nowPlayingMoviesData && (
                        <NowPlaying
                            nowPlayingMoviesData={nowPlayingMoviesData}
                        />
                    )}
                    {upComingMoviesData && (
                        <UpComing upComingMoviesData={upComingMoviesData} />
                    )}
                    {trendingMoviesData && (
                        <Trending trendingMoviesData={trendingMoviesData} />
                    )}
                </>
            )}
            {search && !detailed && (
                <SearchResult
                    searchKeyword={searchKeyword}
                    setMovieID={setMovieID}
                    setDetailed={setDetailed}
                    setSearch={setSearch}
                />
            )}
            {!search && detailed && <Detailed movieID={movieID} />}
            <Footer />
        </>
    );
}

Home.propTypes = {
    setMovieID: PropTypes.func,
    setSearchKeyword: PropTypes.func,
    setSearch: PropTypes.func,
};

export default Home;
