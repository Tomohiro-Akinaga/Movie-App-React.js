export default async function detailedMovieAPI(movieID) {
    const API_URL =
        "https://api.themoviedb.org/3/movie/" +
        movieID +
        "?api_key=9a488bdcdb8993c3fff35cd18757981d&language=en-US";
    return await fetch(API_URL).then((res) => res.json());
}
