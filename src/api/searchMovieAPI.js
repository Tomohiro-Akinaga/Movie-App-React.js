export default async function searchMovieAPI(searchKeyword) {
    const API_URL =
        "https://api.themoviedb.org/3/search/movie?api_key=9a488bdcdb8993c3fff35cd18757981d&query=" +
        searchKeyword;
    return await fetch(API_URL).then((res) => res.json());
}
