import Image from "next/image"
import {
    EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid"
import ProgressBarCircular from "./ProgressBarCircular"
import Link from "next/link"

export default ({ name, date, rating, id, type }) => (
    <div className="w-40">
        <div className="w-full h-60 relative flex justify-end p-3">
            <Link href={`/${type}/${id}`}>
                <Image
                    src="/poster.webp"
                    className="h-full w-full bg-black/50 rounded-lg"
                    fill
                />
            </Link>
            <button className="z-10 bg-white/50 text-black/50 h-6 w-6 rounded-full flex items-center justify-center">
                <EllipsisHorizontalIcon className="h-8" />
            </button>
            <div className="absolute h-10 w-10 rounded-full left-3 -bottom-5">
                <ProgressBarCircular percent={rating} />
            </div>
        </div>
        <div className="py-8 px-3">
            <Link href={`/${type}/${id}`} className="font-bold hover:text-dark-blue">{name}</Link>
            <p className="opacity-60">{date}</p>
        </div>
    </div>
)