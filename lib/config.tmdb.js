export const API_URL = "https://api.themoviedb.org/3/"
export const IMAGE_URL = "https://image.tmdb.org/t/p/"
export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
}
