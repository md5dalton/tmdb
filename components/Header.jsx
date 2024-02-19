import Link from "next/link"
import MenuButton from "./MenuButton"
import SearchButton from "./SearchButton"

export default () => (
    <header className="sticky top-0 z-50 bg-dark-blue">
        <div className="h-16 flex items-center gap-4 px-4 max-w-[1300px] md:px-8 xl:m-auto">
            <MenuButton className="md:hidden"/>
            <div className="logo font-bold text-2xl tracking-widest grow text-center md:text-left md:text-3xl"> 
                <Link href="/">CINEDB</Link>
            </div>
            <SearchButton />
        </div>
    </header>
)