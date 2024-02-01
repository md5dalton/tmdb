import Image from "next/image"
import {
    EllipsisHorizontalIcon,
    PlayIcon
} from "@heroicons/react/24/solid"
import Link from "next/link"

export default ({ name, id, type }) => (
    <div className="w-80">
        <div className="w-full h-48 relative flex justify-end p-3">
            <Link href={`/${type}/${id}`}>
                <Image
                    src="/poster-wide.jpg"
                    className="h-full w-full bg-black/50 rounded-lg"
                    fill
                />
            </Link>
            <button className="z-10 bg-white/50 text-black/50 h-6 w-6 rounded-full flex items-center justify-center">
                <EllipsisHorizontalIcon className="h-8" />
            </button>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PlayIcon className="h-14" />
            </button>
        </div>
        <div className="py-4 text-center">
            <Link href={`/${type}/${id}`} className="font-bold hover:text-dark-blue text-lg">{name}</Link>
            <p>Official Trailer</p>
        </div>
    </div>
)