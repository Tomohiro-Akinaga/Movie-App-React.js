import Heading from "./Heading/Heading";
import NowPlaying from "./NowPlaying/NowPlaying";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import Trending from "./Trending/Trending";
import UpComing from "./UpComing/UpComing";

function Main() {
    return (
        <>
            <Heading />
            <Popular />
            <Trending />
            <NowPlaying />
            <TopRated />
            <UpComing />
        </>
    );
}

export default Main;
