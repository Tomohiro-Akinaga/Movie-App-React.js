import PropTypes from "prop-types";
import useAPI from "./useAPI";
import { useNavigate } from "react-router";
import Loading from "../Loading/Loading";
import Header from "../Home/Header/Header";
import DetailedMovieContent from "./DetailedMovieContent/DetailedMovieContent";
import Footer from "../Home/Footer/Footer";
import { useEffect } from "react";

function Detailed({ movieID }) {
    const detailedMovie = useAPI(movieID);
    const navigate = useNavigate();

    useEffect(() => {
        let unmonted = false;
        if (!unmonted && !movieID) {
            navigate("/");
        }
    }, []);

    return (
        <>
            {!movieID && <Loading />}
            <Header />
            {movieID && <DetailedMovieContent detailedMovie={detailedMovie} />}
            <Footer />
        </>
    );
}

Detailed.propTypes = {
    movieID: PropTypes.string,
};

export default Detailed;
