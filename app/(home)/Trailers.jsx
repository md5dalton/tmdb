import UList from "@/components/UList"
import Header from "./(shared)/Header"
import Section from "./(shared)/Section"
import Card from "./(trailers)/Card"

const trending = [
    {
        name: "Aquaman and the Lost Kingdom",
        date: "Jan 15, 2015",
        rating: 75
    },
    {
        name: "The Beekeeper",
        date: "Jan 15, 2015",
        rating: 15
    },
    {
        name: "Shaun the Sheep Movie",
        date: "Jan 15, 2015",
        rating: 55
    },
]
export default () => (
    <section
        style={{
            backgroundImage: "url(https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/eLGICVIbVWke9U8SnUVrtXdwrlC.jpg)"
        }} 
        className="trailers bg-no-repeat"
    >
        <div className="bg-dark-blue/75 pt-4">
            <div className="flex font-semibold items-center p-4 gap-6">
                <h2 className="text-2xl">Latest Trailers</h2>
                <div className="flex border-[1px] border-lighter-green rounded-full overflow-hidden">
                    <label className="h-8 px-5 flex place-items-center">Popular</label>
                    <input type="radio" className="hidden" />
                    <label className="h-8 px-5 flex place-items-center bg-light-green text-dark-blue rounded-full">
                        <span>Streaming</span>
                    </label>
                    <input type="radio" className="hidden" />
                </div>
            </div>
            <div className="min-h-[350px] w-full my-4 px-4 overflow-x-auto">
                <UList
                    className="flex gap-6 pr-10"
                    items={trending}
                    itemHandler={item => <Card {...item} />}
                />
            </div>
        </div>
    </section>
)