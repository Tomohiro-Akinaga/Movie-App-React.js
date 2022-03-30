import Heading from "./Heading/Heading";
import NowPlaying from "./NowPlaying/NowPlaying";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import Trending from "./Trending/Trending";
import UpComing from "./UpComing/UpComing";
import PropTypes from "prop-types";

function Main({ setLoading }) {
    return (
        <>
            <Heading />
            <Popular />
            <Trending />
            <NowPlaying />
            <TopRated />
            <UpComing setLoading={setLoading} />
        </>
    );
}

Main.propTypes = {
    setLoading: PropTypes.func,
};

export default Main;
