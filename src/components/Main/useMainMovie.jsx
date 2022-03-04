import { useState, useEffect } from "react";
import { fetchMainMovie } from "../../api/mainMovieAPI.js";

function useMainMovie() {
    const [main, setMain] = useState();

    useEffect(() => {
        async function fetchData() {
            const mainMovieData = await fetchMainMovie();
            setMain(mainMovieData);
        }
        fetchData();
    },[]);

    return main;
}

export default useMainMovie;