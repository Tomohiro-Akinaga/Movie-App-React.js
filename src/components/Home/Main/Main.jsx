import PropTypes from "prop-types";
import MainStyle from "./Main.module.scss";

function Main({ mainMoviesData }) {
    const randomNumber = Math.floor(Math.random() * 10);
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

    const mainMoviesPoster = [];
    for (let i = 0; i < 4; i++) {
        mainMoviesPoster.push(
            IMAGE_URL + mainMoviesData.results[randomNumber + i].poster_path
        );
    }

    return (
        <main className={MainStyle.container}>
            {mainMoviesPoster.map((item, index) => (
                <img key={index} src={item} className={MainStyle.poster} />
            ))}
        </main>
    );
}

Main.propTypes = {
    mainMoviesData: PropTypes.object,
};
export default Main;
