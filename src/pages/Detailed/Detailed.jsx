import PropTypes from "prop-types";
import useAPI from "./useAPI";
import { useNavigate } from "react-router";
import Loading from "../Loading/Loading";
import Header from "../Top/Header/Header";
import DetailedMovieContent from "./DetailedMovieContent/DetailedMovieContent";
import Footer from "../../components/Footer/Footer";

function Detailed({ movieID }) {
    const detailedMovie = useAPI(movieID);


    return (
        <>
            {!movieID && <Loading />}
            {movieID && <DetailedMovieContent detailedMovie={detailedMovie} />}
        </>
    );
}

Detailed.propTypes = {
    movieID: PropTypes.string,
};

export default Detailed;
