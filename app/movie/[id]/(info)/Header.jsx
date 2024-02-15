import ProgressBarCircular from "@/components/ProgressBarCircular"
import { PlayIcon } from "@heroicons/react/24/solid"

export default () => (
    <div>
        <h1 className="text-2xl font-semibold text-center py-4">Movie name <span className="text-lg opacity-50">(2024)</span></h1>
        <div className="flex items-center justify-around px-8">
            <div className="flex items-center gap-4">
                <ProgressBarCircular percent={Math.trunc(5.1 * 10)} />
                <h2 className="font-bold">User Score</h2>
            </div>
            <div className="block border-l-[1px] border-l-darker-grey/30 h-6"></div>
            <div className="flex items-center gap-2">
                <PlayIcon className="h-6" />
                <p>Play Trailer</p>
            </div>
        </div>
    </div>
)