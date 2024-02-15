import { formatMinutes } from "@/lib/date";

export default ({ genres, length }) => (
    <div className="text-center my-6 bg-black/10 py-2 border-y-[1px] border-y-black/10">
        <div className="flex justify-center items-center gap-2">
            <div className="flex gap-2">
                <p className="uppercase border-darker-grey/50 border-[1px] rounded-md px-1 text-darker-grey/50">nc16</p>
                <p>02/13/2014 (AU)</p>
            </div>
            <div className="h-1 w-1 bg-white rounded-full"></div>
            {length && <div>{formatMinutes(length)}</div>}
        </div>
        <div className="capitalize">{genres.map(({ name }) => name).join(", ")}</div>
    </div>
)