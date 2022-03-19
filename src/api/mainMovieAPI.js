export default async function mainMovieAPI() {
    const API_URL =
        "https://api.themoviedb.org/3/trending/all/day?api_key=9a488bdcdb8993c3fff35cd18757981d";
    return await fetch(API_URL).then((res) => res.json());
}
