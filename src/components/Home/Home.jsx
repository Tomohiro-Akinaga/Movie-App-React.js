import useAPI from "./useAPI";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import NowPlaying from "./NowPlaying/NowPlaying";
import UpComing from "./UpComing/UpComing";
import Trending from "./Trending/Trending";
import Footer from "./Footer/Footer";

export default function Home() {
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
            <Header />
            {mainMoviesData && <Main mainMoviesData={mainMoviesData} />}
            {popularMoviesData && (
                <Popular popularMoviesData={popularMoviesData} />
            )}
            {topRatedMoviesData && (
                <TopRated topRatedMoviesData={topRatedMoviesData} />
            )}
            {nowPlayingMoviesData && (
                <NowPlaying nowPlayingMoviesData={nowPlayingMoviesData} />
            )}
            {upComingMoviesData && (
                <UpComing upComingMoviesData={upComingMoviesData} />
            )}
            {trendingMoviesData && (
                <Trending trendingMoviesData={trendingMoviesData} />
            )}
            <Footer />
        </>
    );
}
