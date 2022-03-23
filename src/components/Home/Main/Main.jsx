import PropTypes from "prop-types";
import MainStyle from "./Main.module.scss";

function Main({ mainMoviesData }) {
    const randomNumber = Math.floor(Math.random() * 10);
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
    const mainMoviesPoster = [
        IMAGE_URL + mainMoviesData.results[randomNumber].poster_path,
        IMAGE_URL + mainMoviesData.results[randomNumber + 1].poster_path,
    ];

    return (
        <main className={MainStyle.container}>
            <div className={MainStyle.left}>
                <img src={mainMoviesPoster[0]} className={MainStyle.poster} />
            </div>
            <div className={MainStyle.right}>
                <img src={mainMoviesPoster[1]} className={MainStyle.poster} />
            </div>
        </main>
    );
}

Main.propTypes = {
    mainMoviesData: PropTypes.object,
};
export default Main;
