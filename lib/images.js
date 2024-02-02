// const BASE_URL = "https://image.tmdb.org/t/p/"
const BASE_URL = "https://media.themoviedb.org/t/p/"

// export const getImage = (path, size = 342) => BASE_URL + "w" + size + "/" + path
export const getImage = (path, size = 342) => BASE_URL + "w220_and_h330_face" + path