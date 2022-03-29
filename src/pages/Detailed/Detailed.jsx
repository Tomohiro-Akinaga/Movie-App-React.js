import { useLocation } from "react-router";
import useAPI from "./useAPI";
import Header from "../../components/Header/Header";
import DetailedMovieContent from "./DetailedMovieContent/DetailedMovieContent";
import Footer from "../../components/Footer/Footer";

function Detailed() {
    const location = useLocation();
    const movieID = location.state;
    const movieData = useAPI(movieID);

    return (
        <>
            <Header />
            {movieData && <DetailedMovieContent movieData={movieData} />}
            <Footer />
        </>
    );
}

export default Detailed;
