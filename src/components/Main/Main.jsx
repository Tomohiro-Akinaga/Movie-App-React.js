import PropTypes from 'prop-types'
import useMainMovie from "./useMainMovie.jsx";
import Image from "../Main-Image/Image.jsx";
import MainStyle from "./Main.module.scss";

const i = Math.floor(Math.random() * 10);

function Main() {
    const mainMovie = useMainMovie();
    return (
        <div className={MainStyle.image}>
            {mainMovie && <Image mainMovieImage={mainMovie.results[i].poster_path}/>}
            {mainMovie && <Image mainMovieImage={mainMovie.results[i+1].poster_path}/>}
        </div>
    )
}

Main.propTypes = {
    mainMovieImage: PropTypes.string
}

export default Main;