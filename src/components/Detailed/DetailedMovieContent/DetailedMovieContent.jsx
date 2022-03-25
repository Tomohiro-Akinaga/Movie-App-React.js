import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ContentStyle from "./Content.module.scss";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function DetailedMovieContent({ detailedMovie }) {
    if (!detailedMovie) {
        return null;
    }
    const moviesData = {
        id: detailedMovie.id,
        title: detailedMovie.title,
        description: detailedMovie.overview,
        poster_path: IMAGE_URL + detailedMovie.poster_path,
        backdrop_path: IMAGE_URL + detailedMovie.backdrop_path,
        release_date: detailedMovie.release_date,
        genres: detailedMovie.genres,
        homepage: detailedMovie.homepage,
    };

    const genresData = moviesData.genres;
    const link = moviesData.homepage;

    return (
        <div className={ContentStyle.container}>
            <img src={moviesData.poster_path} className={ContentStyle.poster} />
            <div className={ContentStyle.titleBox}>
                <h1 className={ContentStyle.title}>{moviesData.title}</h1>
                <h2 className={ContentStyle.description}>
                    {moviesData.description}
                </h2>
                <div className={ContentStyle.information}>
                    <div className={ContentStyle.release}>
                        <h3 className={ContentStyle.subHeading}>
                            Release date
                        </h3>
                        <p className={ContentStyle.text}>
                            {moviesData.release_date}
                        </p>
                    </div>
                    <div className={ContentStyle.genre}>
                        <h3 className={ContentStyle.subHeading}>Genre</h3>
                        {genresData.map((item, index) => (
                            <p key={index} className={ContentStyle.text}>
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
                <a href={moviesData.homepage} className={ContentStyle.link}>
                    {moviesData.homepage}
                </a>
            </div>
        </div>
    );
}

DetailedMovieContent.propTypes = {
    detailedMovie: PropTypes.object,
};

export default DetailedMovieContent;
