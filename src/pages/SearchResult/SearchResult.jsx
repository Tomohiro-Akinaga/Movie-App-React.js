import { useLocation } from "react-router-dom";
import useAPI from "./useAPI";
import Header from "../../components/Header/Header";
import SearchResultBox from "./SearchResult-Box/SearchResultBox";
import Footer from "../../components/Footer/Footer";

function SearchResult() {
    const location = useLocation();
    const searchKeyword = location.state;
    const searchMoviesData = useAPI(searchKeyword);

    const moviesData = [];

    if (!searchMoviesData) {
        return null;
    }

    searchMoviesData.results.map((item) => {
        if (item.poster_path === null) {
            return;
        }
        const object = { id: "", posterPath: "" };
        object.id = item.id;
        object.posterPath =
            "https://image.tmdb.org/t/p/w500" + item.poster_path;
        moviesData.push(object);
    });

    return (
        <>
            <Header />
            <SearchResultBox
                moviesData={moviesData}
                searchKeyword={searchKeyword}
            />
            <Footer />
        </>
    );
}

export default SearchResult;
