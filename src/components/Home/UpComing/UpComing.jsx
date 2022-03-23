import PropTypes from "prop-types";
import UpComingItem from "./UpComing-Item/UpComingItem";
import UpComingStyle from "./UpComing.module.scss";

function UpComing({ upComingMoviesData }) {
    const moviesData = [];

    upComingMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={UpComingStyle.container}>
            <h3 className={UpComingStyle.heading}>Upcoming</h3>
            <ul className={UpComingStyle.popular}>
                {moviesData.map((item, index) => (
                    <UpComingItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                    />
                ))}
            </ul>
        </div>
    );
}

UpComing.propTypes = {
    upComingMoviesData: PropTypes.object,
};

export default UpComing;
