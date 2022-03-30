import TopRatedItem from "./TopRated-Item/TopRatedItem";
import useAPI from "../../useAPI";
import styles from "./TopRated.module.scss";

function TopRated() {
    const { topRatedMoviesData } = useAPI();

    if (!topRatedMoviesData) {
        return null;
    }

    const moviesData = [];

    topRatedMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Top Rated</h3>
            <ul className={styles.topRated}>
                {moviesData.map((item, index) => (
                    <TopRatedItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TopRated;
