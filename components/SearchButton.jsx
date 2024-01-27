"use client"

import { useSearch } from "@/context/Search"
import {
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"

export default () => {

    const { toggle } = useSearch()

    return (
        <button onClick={toggle}>
            <MagnifyingGlassIcon className="h-6" />
        </button>
    )
}