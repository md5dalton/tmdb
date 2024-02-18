import { details } from "@/actions/movie"
import Info from "./Info"
import Media from "./Media"
import { query } from "@/apis/yts"

export default async ({ params: { id }, children }) => {

    const movie = await details(id)

    // const torrent = await query(movie.imdb_id)

    // console.log(torrent)
    return (
        <div>
            {/* <Info {...movie} /> */}
            <Media />
        </div>
    )
}