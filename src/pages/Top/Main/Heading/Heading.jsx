import styles from "./Heading.module.scss";
import useAPI from "../../useAPI";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const randomNumber = Math.floor(Math.random() * 10);

function Heading() {
    const { mainMoviesData } = useAPI();
    const mainMovies = [];

    if (!mainMoviesData) {
        return null;
    }

    for (let i = 0; i < 4; i++) {
        const object = { id: "", posterPath: "" };
        object.id = mainMoviesData.results[randomNumber + i].id;
        object.posterPath =
            IMAGE_URL + mainMoviesData.results[randomNumber + i].poster_path;
        mainMovies.push(object);
    }

    return (
        <main className={styles.container}>
            <ul className={styles.itemBox}>
                {mainMovies.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <img
                            src={item.posterPath}
                            id={item.id}
                            className={styles.poster}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default Heading;
