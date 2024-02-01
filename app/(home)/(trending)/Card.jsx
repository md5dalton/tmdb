import Image from "next/image"
import {
    EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid"
import ProgressBarCircular from "./ProgressBarCircular"

export default () => (
    <div className="w-40">
        <div className="w-full h-60 relative flex justify-end p-3">
            <Image
                src="/poster.webp"
                className="h-full w-full bg-black/50 rounded-lg"
                fill
            />
            <button className="z-10 bg-white/50 text-black/50 h-6 w-6 rounded-full flex items-center justify-center">
                <EllipsisHorizontalIcon className="h-8" />
            </button>
            <div className="absolute h-10 w-10 rounded-full left-3 -bottom-5">
                <ProgressBarCircular percent={9} />
            </div>
            
        </div>
        <div>
            <h3>Movie name</h3>
            <p>Feb 1, 2024</p>
        </div>
    </div>
)