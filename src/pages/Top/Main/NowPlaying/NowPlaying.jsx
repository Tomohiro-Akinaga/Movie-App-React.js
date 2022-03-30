import NowPlayingItem from "./NowPlaying-Item/NowPlayingItem";
import styles from "./NowPlaying.module.scss";
import useAPI from "../../useAPI";

function NowPlaying() {
    const { nowPlayingMoviesData } = useAPI();

    if (!nowPlayingMoviesData) {
        return null;
    }

    const moviesData = [];

    nowPlayingMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Now Playing</h3>
            <ul className={styles.nowPlaying}>
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

export default NowPlaying;
