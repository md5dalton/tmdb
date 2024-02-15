import { details } from "@/actions/movie"
import Info from "./Info"
import Media from "./Media"

export default async ({ params: { id }, children }) => {

    const movie = await details(id)

    // console.log(movie)
    
    return (
        <div>
            <Info {...movie} />
            <Media />
        </div>
    )
}