import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import useAPI from "./useAPI";
import Header from "../../components/Header/Header";
import DetailedMovieContent from "./DetailedMovieContent/DetailedMovieContent";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

function Detailed() {
    const location = useLocation();
    const movieID = location.state;
    const movieData = useAPI(movieID);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        movieData && setLoading(false);
    }, [movieData]);

    return (
        <>
            {loading && <Loading />}
            <Header />
            {movieData && <DetailedMovieContent movieData={movieData} />}
            <Footer />
        </>
    );
}

export default Detailed;
