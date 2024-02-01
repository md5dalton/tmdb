import Search from "./(home)/Search"
import Trailers from "./(home)/Trailers"
import Trending from "./(home)/Trending"

export default async () => {

    // const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US"
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    //     }
    // }
    
    // fetch(url, options)
    //   .then(res => res.json())
    //   .then(({ results }) => {

        

    //     // console.log(results.length)
    //   })
    //   .catch(err => console.error('error:' + err))

    return <>
        <Search />
        <Trailers />
        {/* <Trending /> */}
    </>

}