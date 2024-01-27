export default () => (
    <section>
        <div
            className="home one
                p-4 py-6 min-h-[300px] max-h-[360px] 
                flex flex-col justify-between
                bg-black/20 bg-no-repeat bg-cover bg-center">
            <div className="grid gap-2">
                <h1 className="capitalize text-5xl font-bold">welcome.</h1>
                <p className="text-3xl font-semibold leading-9">Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="flex items-center h-12 bg-white rounded-full">
                <input className="bg-transparent grow h-full px-6 outline-none text-black/50 text-lg" type="text" placeholder="Search for a movie, tv show" />
                <button className="bg-green-500 h-full rounded-full capitalize w-24">search</button>
            </div>
        </div>
    </section>
)