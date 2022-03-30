import useAPI from "../../useAPI";
import UpComingItem from "./UpComing-Item/UpComingItem";
import styles from "./UpComing.module.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

function UpComing({ setLoading }) {
    const { upComingMoviesData } = useAPI();

    if (!upComingMoviesData) {
        return null;
    }

    const moviesData = [];

    upComingMoviesData.results.map((item) => {
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Upcoming</h3>
            <ul className={styles.upComing}>
                {moviesData.map((item, index) => (
                    <UpComingItem
                        key={index}
                        id={item.id}
                        posterPath={item.posterPath}
                        setLoading={setLoading}
                    />
                ))}
            </ul>
        </div>
    );
}

UpComing.propTypes = {
    setLoading: PropTypes.func,
};

export default UpComing;
