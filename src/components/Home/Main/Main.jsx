import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import MainStyle from "./Main.module.scss";

function Main({ mainMoviesData, setMovieID }) {
    const navigate = useNavigate();

    const randomNumber = Math.floor(Math.random() * 10);
    const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

    const mainMoviesPoster = [];

    for (let i = 0; i < 4; i++) {
        const object = { id: "", posterPath: "" };
        object.id = mainMoviesData.results[randomNumber + i].id;
        object.posterPath =
            IMAGE_URL + mainMoviesData.results[randomNumber + i].poster_path;
        mainMoviesPoster.push(object);
    }

    const handleClick = (e) => {
        setMovieID(e.target.id);
        navigate("detailed");
    };

    return (
        <main className={MainStyle.container}>
            {mainMoviesPoster.map((item, index) => (
                <img
                    key={index}
                    src={item.posterPath}
                    id={item.id}
                    className={MainStyle.poster}
                    onClick={handleClick}
                />
            ))}
        </main>
    );
}

Main.propTypes = {
    mainMoviesData: PropTypes.object,
    setMovieID: PropTypes.func,
};
export default Main;
