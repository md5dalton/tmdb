import { getAll } from "@/actions/trending"
import UList from "@/components/UList"
import Header from "./(shared)/Header"
import Section from "./(shared)/Section"
import Card from "./(trending)/Card"

export default async () => {

    const req = await getAll()
    
    return (
    <section
        style={{
            backgroundImage: "url(/trending-bg.svg)",
            backgroundPosition: "50% 220px",
            backgroundSize: "1300px"
        }}
        className="text-black bg-no-repeat py-4">
            <div>
                <Header title="trending" />
                <div className="min-h-[350px] mt-4">
                    <div className="px-4 w-full overflow-x-auto after:block flex after:p-2">
                        {
                            req.results ? 
                            <UList
                                className="flex gap-6"
                                items={req.results}
                                itemHandler={item => <Card {...item} />}
                            /> :
                            <p>error</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}