import NavLink from "@/components/NavLink"

export default ({ title }) => (
    <div className="flex font-semibold items-center p-4 gap-6">
        <h2 className="text-2xl capitalize">{title}</h2>
        <div className="flex text-dark-blue border-[1px] border-dark-blue rounded-full overflow-hidden">
            <NavLink
                href={{query: { t: "today"}}}
                className="h-8 px-5 flex place-items-center"
            >Today</NavLink>
            <NavLink
                href={{query: { t: "this-week"}}}
                activeClassName="bg-dark-blue rounded-full"
                className="h-8 px-5 flex place-items-center"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-lighter-green via-light-blue to-vibrant-light-blue">This week</span>
            </NavLink>
            {/* <input type="radio" className="hidden" />
            <label className="h-8 px-5 flex place-items-center  rounded-full">
                <span className="gradient-text">This week</span>
            </label>
            <input type="radio" className="hidden" /> */}
        </div>
    </div>
)