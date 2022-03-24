import PropTypes from "prop-types";
import useAPI from "./useAPI";
import Loading from "../Loading/Loading";
import Header from "../Home/Header/Header";
import DetailedMovieContent from "./DetailedMovieContent/DetailedMovieContent";

function Detailed({ movieID }) {
    const detailedMovie = useAPI(movieID);

    return (
        <>
            {!movieID && <Loading />}
            <Header />
            {movieID && <DetailedMovieContent />}
        </>
    );
}

Detailed.propTypes = {
    movieID: PropTypes.string,
};

export default Detailed;
