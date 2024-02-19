export default () => (
    <section>
        <div
            style={{
                backgroundImage: "url('https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter\(duotone,00192f,00baff\)/SqAZjEqqBAYvyu3KSrWq1d0QLB.jpg')"
            }}
            className="home one
                p-4 py-6 min-h-[300px] max-h-[360px] md:py-12 md:px-8
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