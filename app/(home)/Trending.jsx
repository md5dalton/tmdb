import UList from "@/components/UList"
import Card from "./(trending)/Card"

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
    <section className="trending text-black bg-no-repeat py-4">
        <div className="flex font-semibold items-center p-4 gap-6">
            <h2 className="text-2xl">Trending</h2>
            <div className="flex text-dark-blue border-[1px] border-dark-blue rounded-full overflow-hidden">
                <label className="h-8 px-5 flex place-items-center">Today</label>
                <input type="radio" className="hidden" />
                <label className="h-8 px-5 flex place-items-center bg-dark-blue rounded-full">
                    <span className="gradient-text">This week</span>
                </label>
                <input type="radio" className="hidden" />
            </div>
        </div>
        <div className="min-h-[350px] mt-4">
            <div className="px-4 w-full overflow-x-auto">
                <UList
                    className="flex gap-6"
                    items={trending}
                    itemHandler={item => <Card {...item} />}
                />
            </div>
        </div>
    </section>
)