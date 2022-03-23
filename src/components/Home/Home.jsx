import useAPI from "./useAPI";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";

export default function Home() {
    const { mainMoviesData, popularMoviesData, topRatedMoviesData } = useAPI();
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
        </>
    );
}
