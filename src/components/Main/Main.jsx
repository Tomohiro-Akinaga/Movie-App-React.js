import PropTypes from 'prop-types'
import useMainMovie from "./useMainMovie.jsx";
import Image from "../Main-Image/Image.jsx";
import MainStyle from "./Main.module.scss";

const i = Math.floor(Math.random() * 10);

function Main() {
    const mainMovie = useMainMovie();
    console.log(mainMovie);
    return (
        <>
            {mainMovie && <Image mainMovieImage={mainMovie.results[i].poster_path}/>}
            {/* <Description />
            <PlayCard />
            <InfoCard /> */}
        </>
    )
}

Main.propTypes = {
    mainMovieImage: PropTypes.string
}

export default Main;