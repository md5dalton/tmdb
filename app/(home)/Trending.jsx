export default () => (
    <section className="trending text-black bg-no-repeat py-4">
        <div className="flex font-semibold items-center p-4 gap-6">
            <h2 className="text-2xl">Trending</h2>
            <div className="flex text-dark-blue border-[1px] border-dark-blue rounded-full overflow-hidden">
                <label className="h-8 px-5 flex place-items-center">Today</label>
                <input type="radio" className="hidden" />
                <label className="h-8 px-5 flex place-items-center bg-dark-blue rounded-full">
                    <span className="gradient-text">This week</span>
                </label>
                <input type="radio" className="hidden" />
            </div>
        </div>
        <div className="min-h-[350px]"></div>
    </section>
)