import Link from "next/link"
import MenuButton from "./MenuButton"
import SearchButton from "./SearchButton"

export default () => (
    <header className="sticky top-0 z-50 container bg-dark-blue h-16 flex items-center gap-4 px-4">
        <MenuButton />
        <div className="logo font-bold text-2xl tracking-widest grow text-center"> 
            <Link href="/">CINEDB</Link>
        </div>
        <SearchButton />
    </header>
)