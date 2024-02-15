// const BASE_URL = "https://image.tmdb.org/t/p/"
const BASE_URL = "https://media.themoviedb.org/t/p/"

// export const getImage = (path, size = 342) => BASE_URL + "w" + size + "/" + path
export const getImage = (path, size = 342) => BASE_URL + "w220_and_h330_face" + path
export const getBackdrop = (path, size = {w: 1000, h: 450}) => BASE_URL + `w${size.w}_and_h${size.h}_multi_faces` + path