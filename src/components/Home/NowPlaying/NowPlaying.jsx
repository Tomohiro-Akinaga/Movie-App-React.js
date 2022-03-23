import PropTypes from "prop-types";
import NowPlayingItem from "./NowPlaying-Item/NowPlayingItem";
import NowPlayingStyle from "./NowPlaying.module.scss";

function NowPlaying({ nowPlayingMoviesData }) {
    const moviesData = [];

    nowPlayingMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={NowPlayingStyle.container}>
            <h3 className={NowPlayingStyle.heading}>Now Playing</h3>
            <ul className={NowPlayingStyle.popular}>
                {moviesData.map((item, index) => (
                    <NowPlayingItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                    />
                ))}
            </ul>
        </div>
    );
}

NowPlaying.propTypes = {
    nowPlayingMoviesData: PropTypes.object,
};

export default NowPlaying;
