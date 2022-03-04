// API = https://api.themoviedb.org/3/trending/all/day?api_key=9a488bdcdb8993c3fff35cd18757981d
// APIkey = 9a488bdcdb8993c3fff35cd18757981d

export async function fetchMainMovie() {
    return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=9a488bdcdb8993c3fff35cd18757981d`)
            .then(res => res.json())
};