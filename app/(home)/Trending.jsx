import { getAll } from "@/actions/trending"
import UList from "@/components/UList"
import Header from "./(shared)/Header"
import Section from "./(shared)/Section"
import Card from "./(trending)/Card"

export default async () => {

    const req = await getAll()
    
    return (
        <Section className="trending">
            <Header title="trending" />
            <div className="min-h-[350px] mt-4">
                <div className="px-4 w-full overflow-x-auto">
                    {
                        req.results ? 
                        <UList
                            className="flex gap-6 pr-10"
                            items={req.results}
                            itemHandler={item => <Card {...item} />}
                        /> :
                        <p>error</p>
                    }
                </div>
            </div>
        </Section>
    )
}