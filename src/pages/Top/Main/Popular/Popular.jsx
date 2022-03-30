import useAPI from "../../useAPI";
import PopularItem from "./Popular-Item/PopularItem";
import styles from "./Popular.module.scss";

function Popular() {
    const { popularMoviesData } = useAPI();

    if (!popularMoviesData) {
        return null;
    }

    const moviesData = [];

    popularMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Popular</h3>
            <ul className={styles.popular}>
                {moviesData.map((item, index) => (
                    <PopularItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Popular;
