import { useNavigate } from "react-router-dom";
import styles from "./DetailedMovieContent.module.scss";
import closeImg from "../../../assets/close.png";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function DetailedMovieContent({ movieData }) {
    const navigate = useNavigate();

    const moviesData = {
        id: movieData.id,
        title: movieData.title,
        description: movieData.overview,
        poster_path: IMAGE_URL + movieData.poster_path,
        backdrop_path: IMAGE_URL + movieData.backdrop_path,
        release_date: movieData.release_date,
        genres: movieData.genres,
        homepage: movieData.homepage,
    };
    const genresData = movieData.genres;

    return (
        <div className={styles.container}>
            <div className={styles.posterBox}>
                <img src={moviesData.poster_path} className={styles.poster} />
            </div>
            <div className={styles.titleBox}>
                <h1 className={styles.title}>{moviesData.title}</h1>
                <p className={styles.description}>{moviesData.description}</p>
                <div className={styles.information}>
                    <div className={styles.release}>
                        <h3 className={styles.subHeading}>Release date</h3>
                        <p className={styles.text}>{moviesData.release_date}</p>
                    </div>
                    <div className={styles.genre}>
                        <h3 className={styles.subHeading}>Genre</h3>
                        {genresData.map((item, index) => (
                            <p key={index} className={styles.text}>
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
                <a
                    href={moviesData.homepage}
                    className={styles.link}
                    target="_blank"
                >
                    {moviesData.homepage}
                </a>
            </div>
            <button className={styles.goBack} onClick={() => navigate(-1)}>
                <img className={styles.goBackImg} src={closeImg} />
            </button>
        </div>
    );
}

export default DetailedMovieContent;
