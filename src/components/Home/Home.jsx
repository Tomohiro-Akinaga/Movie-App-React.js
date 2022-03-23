import useAPI from "./useAPI";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Popular from "./Popular/Popular";

export default function Home() {
    const { mainMoviesData, popularMoviesData } = useAPI();
    return (
        <>
            <Header />
            {mainMoviesData && <Main mainMoviesData={mainMoviesData} />}
            {popularMoviesData && (
                <Popular popularMoviesData={popularMoviesData} />
            )}
        </>
    );
}
