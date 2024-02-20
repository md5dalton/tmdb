"use client"

import { useSearch } from "@/context/Search"
import { ArrowTrendingUpIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Modal from "./Modal"
import UList from "./UList"

const results = [
    {name: "Madam Web"},
    {name: "Iron Claw"},
    {name: "Iron Claw"},
    {name: "Iron Claw"},
    {name: "Iron Claw"},
    {name: "Iron Claw"},
    {name: "Iron Claw"},
    {name: "Iron Claw"},
    {name: "Iron Claw"},
]

export default () => {
    
    const { isOpen, toggle } = useSearch()

    return isOpen && (
        <Modal toggler={toggle}>
            <aside className="bg-white text-black min-h-52 md:max-w-[600px] md:m-auto md:shadow-md">
                <div className="flex items-center px-4 py-2 border-b-[1px]">
                    <MagnifyingGlassIcon height={20} />
                    <input type="text" placeholder="Search" className="px-2 italic grow outline-none text-black/80" />
                    <XMarkIcon height={20} className="opacity-80" />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-black/10 border-b-[1px]">
                    <ArrowTrendingUpIcon height={24} />
                    <p className="text-lg font-bold">Trending</p>
                </div>
                <UList
                    items={results}
                    itemHandler={({ type, name }) => (
                        <div className="flex items-center gap-2 px-4 py-[3px] border-b-[1px]">
                            <MagnifyingGlassIcon height={16} />
                            <p>{name}</p>
                        </div>
                    )}
                />
            </aside>
        </Modal>
    )
}