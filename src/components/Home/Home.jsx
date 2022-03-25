import useAPI from "./useAPI";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import NowPlaying from "./NowPlaying/NowPlaying";
import UpComing from "./UpComing/UpComing";
import Trending from "./Trending/Trending";
import Footer from "./Footer/Footer";
import Loading from "../Loading/Loading";
import { useState } from "react";

function Home({ setMovieID, setSearchKeyword }) {
    const [search, setSearch] = useState(false);
    console.log(search);
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
            {!search && (
                <>
                    {mainMoviesData && (
                        <Main
                            mainMoviesData={mainMoviesData}
                            setMovieID={setMovieID}
                        />
                    )}
                    {popularMoviesData && (
                        <Popular popularMoviesData={popularMoviesData} />
                    )}
                    {topRatedMoviesData && (
                        <TopRated topRatedMoviesData={topRatedMoviesData} />
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
