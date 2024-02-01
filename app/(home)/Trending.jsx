import UList from "@/components/UList"
import Header from "./(shared)/Header"
import Section from "./(shared)/Section"
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
    <Section className="trending">
        <Header title="trending" />
        <div className="min-h-[350px] mt-4">
            <div className="px-4 w-full overflow-x-auto">
                <UList
                    className="flex gap-6 pr-10"
                    items={trending}
                    itemHandler={item => <Card {...item} />}
                />
            </div>
        </div>
    </Section>
)