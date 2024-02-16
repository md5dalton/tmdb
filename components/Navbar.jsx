import Link from "next/link"
import UList from "./UList"

export default () => (
    <UList
        className="grid gap-2"
        items={[{name: "Movies", id: "movie"}, {name: "TV Shows", id: "tv"}]}
        itemHandler={({ name, id }) => (
            <Link
                href={`/${id}`}
                className="text-xl font-semibold"
            >{name}</Link>
        )}
    />
)