import useAPI from "./useAPI";
import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import NowPlaying from "./NowPlaying/NowPlaying";
import UpComing from "./UpComing/UpComing";
import Trending from "./Trending/Trending";
import SearchResult from "./SearchResult/SearchResult";
import Footer from "./Footer/Footer";

export default function Home() {
    const [search, setSearch] = useState(false);

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
            <Header setSearch={setSearch} />
            {!search && (
                <div>
                    {mainMoviesData && <Main mainMoviesData={mainMoviesData} />}
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
                </div>
            )}
            {search && <SearchResult />}
            <Footer />
        </>
    );
}
