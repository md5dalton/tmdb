import { details } from "@/actions/movie"
import Info from "./Info"
import Media from "./Media"
import { query } from "@/apis/yts"
import { API_URL } from "@/lib/config.yts"

export default async ({ params: { id }, children }) => {

    const movie = await details(id)
    const torrent = await fetch(API_URL + movie.imdb_id)
    console.log(movie.imdb_id)
    
    return (
        <div>
            <Info {...movie} />
            <Media />
        </div>
    )
}