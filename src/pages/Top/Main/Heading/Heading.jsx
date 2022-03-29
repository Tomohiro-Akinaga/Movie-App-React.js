import { useNavigate } from "react-router-dom";
import styles from "./Heading.module.scss";
import useAPI from "../../useAPI";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const randomNumber = Math.floor(Math.random() * 10);

function Heading() {
    const navigate = useNavigate();
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
                    <li
                        className={styles.item}
                        id={item.id}
                        key={index}
                        onClick={() => {
                            navigate("/detailed", { state: item.id });
                        }}
                    >
                        <img src={item.posterPath} className={styles.poster} />
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Heading;
