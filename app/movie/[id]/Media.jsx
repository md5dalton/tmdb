import UList from "@/components/UList"
import Link from "next/link"
import { ArrowDownTrayIcon, FilmIcon } from "@heroicons/react/24/outline"

const media = [
    {name: "Anyone.But.You.2023.1080p.WEBRip.1400MB.DD5.1.x264-GalaxyRG", count: 4},
    {name: "Air Force One Down (2024) [1080p] [WEBRip] [5.1]", count: 15},
    {name: "The Animal Kingdom (2023) 2160p 4k WEBRip x265 10bit 5.1 YTS YIFY", count: 3},
    {name: "The.Beekeeper.2024.1080p.AMZN.WEBRip.1400MB.DD5.1.x264-GalaxyRG", count: 27},
]
const quality = [
    {name: "4k", count: 4},
    {name: "fhd", count: 15},
    {name: "hd", count: 3},
    {name: "other", count: 27},
]

export default () => (
    <section className="text-black p-4">
        <div className="flex items-center justify-between py-4">
            <h2 className="text-xl font-semibold">Media</h2>
            <UList
                className="flex font-semibold uppercase gap-4"
                items={quality}
                itemHandler={({ name, count }) => (
                    <Link
                        href={{pathname: "", query: {q: name}}}
                        className="flex gap-1"
                    >
                        {name}
                        <span className="opacity-70">{count}</span>
                    </Link>
                )}
            />
        </div>
        <UList
            className="my-4 border-[1px] border-darker-grey rounded-lg"
            items={media}
            itemHandlerProps={{className: "odd:bg-light-grey"}}
            itemHandler={({ name, type, size, age, seed, leech }) => (
                <div className="flex gap-4 p-4">
                    <div className="grid content-between">
                        <FilmIcon className="h-6" />
                        <ArrowDownTrayIcon className="h-6" />
                    </div>
                    <div className="grid gap-2">
                        <p className="line-clamp-1">{name}</p>
                        <div className="flex justify-between items-end">
                            <div className="flex gap-2">
                                <p className="text-vibrant-light-blue">1829</p>
                                <p className="text-red-500">355</p>
                            </div>
                            <div className="opacity-50">
                                <p>Feb 10, 2024</p>
                                <p className="uppercase text-end">4gb</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        />
    </section>
)