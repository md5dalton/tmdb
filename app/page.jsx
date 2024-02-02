import Search from "./(home)/Search"
import Trailers from "./(home)/Trailers"
import Trending from "./(home)/Trending"

export default async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

    // const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US"
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    }

    // try {

    //     const req = await fetch(url, options)
        
    //     const res = await req.json()

    //     console.log(res)
        
    // } catch (error) {

    //     console.error('error:' + error)

    // }
    
    // fetch(url, options)
    //   .then(res => res.json())
    //   .then(({ results }) => {

        
    //       console.log(results)

    //   })
    //   .catch(err => console.error('error:' + err))

    return <>
        <Search />
        <Trending />
        <Trailers />
    </>

}