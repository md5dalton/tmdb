import Image from "next/image"
import {
    EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"
import { getImage } from "@/lib/images"
import { formatDate } from "@/lib/date"
import ProgressBarCircular from "@/components/ProgressBarCircular"

export default ({ title, name, release_date, first_air_date, vote_average, id, media_type, poster_path }) => (
    <div className="w-40">
        <div className="w-full h-60 relative flex justify-end p-3">
            <Link href={`/${media_type}/${id}`}>
                <Image
                    alt={title || name}
                    src={getImage(poster_path)}
                    className="h-full w-full bg-black/50 rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    // placeholder="blur"
                    fill
                />
            </Link>
            <button className="z-10 bg-white/50 text-black/50 h-6 w-6 rounded-full flex items-center justify-center">
                <EllipsisHorizontalIcon className="h-8" />
            </button>
            <div className="absolute h-10 w-10 rounded-full left-3 -bottom-5">
                <ProgressBarCircular percent={Math.trunc(vote_average * 10)} />
            </div>
        </div>
        <div className="py-8 px-3">
            <Link href={`/${media_type}/${id}`} className="font-bold hover:text-dark-blue">{title || name}</Link>
            <p className="opacity-60">{formatDate(release_date || first_air_date)}</p>
        </div>
    </div>
)