import { formatDate } from "@/lib/date"
import Description from "./(info)/Description"
import Header from "./(info)/Header"
import Images from "./(info)/Images"
import Misc from "./(info)/Misc"
import People from "./(info)/People"

export default ({ 
    backdrop_path, 
    poster_path, 
    title, name, 
    release_date, first_air_date, 
    vote_average ,
    overview,
    genres,
    runtime
}) => (
    <section className="bg-vibrant-dark-blue">
        <Images backdrop={backdrop_path} poster={poster_path} />
        <Header
            name={title || name} 
            year={formatDate(release_date || first_air_date, "yyyy")}
            vote={vote_average}
        />
        <Misc
            genres={genres}
            length={runtime}
        />
        <Description overview={overview} />
        <People />
    </section>
)