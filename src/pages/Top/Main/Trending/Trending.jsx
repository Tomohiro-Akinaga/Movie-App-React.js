import TrendingItem from "./Trending-Item/TrendingItem";
import useAPI from "../../useAPI";
import styles from "./Trending.module.scss";

function Trending() {
    const { trendingMoviesData } = useAPI();

    if (!trendingMoviesData) {
        return null;
    }

    const moviesData = [];

    trendingMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Trending</h3>
            <ul className={styles.trending}>
                {moviesData.map((item, index) => (
                    <TrendingItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Trending;
