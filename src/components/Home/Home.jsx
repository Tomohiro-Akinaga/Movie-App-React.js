import useAPI from "./useAPI";
import { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import NowPlaying from "./NowPlaying/NowPlaying";
import UpComing from "./UpComing/UpComing";
import Trending from "./Trending/Trending";
import SearchResult from "./SearchResult/SearchResult";
import Footer from "./Footer/Footer";
import Loading from "../Loading/Loading";
import HomeStyle from "./Home.module.scss";

function Home({ setMovieID }) {
    const [search, setSearch] = useState();
    const [searchKeyword, setSearchKeyword] = useState();

    const {
        mainMoviesData,
        popularMoviesData,
        topRatedMoviesData,
        nowPlayingMoviesData,
        upComingMoviesData,
        trendingMoviesData,
        searchMoviesData,
    } = useAPI(searchKeyword);

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
            {search && (
                <div className={HomeStyle.search}>
                    <h2 className={HomeStyle.heading}>Search result</h2>
                    <p className={HomeStyle.keyword}>{searchKeyword}</p>
                </div>
            )}

            {searchMoviesData && (
                <SearchResult searchMoviesData={searchMoviesData} />
            )}
            <Footer />
        </>
    );
}

Home.propTypes = {
    setMovieID: PropTypes.func,
};

export default Home;
