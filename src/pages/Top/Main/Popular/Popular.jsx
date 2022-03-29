import PropTypes from "prop-types";
import PopularItem from "./Popular-Item/PopularItem";
import PopularStyle from "./Popular.module.scss";

function Popular({ popularMoviesData, setDetailed, setMovieID }) {
    const moviesData = [];

    popularMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={PopularStyle.container}>
            <h3 className={PopularStyle.heading}>Popular</h3>
            <ul className={PopularStyle.popular}>
                {moviesData.map((item, index) => (
                    <PopularItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                        setDetailed={setDetailed}
                        setMovieID={setMovieID}
                    />
                ))}
            </ul>
        </div>
    );
}

Popular.propTypes = {
    popularMoviesData: PropTypes.object,
};

export default Popular;
