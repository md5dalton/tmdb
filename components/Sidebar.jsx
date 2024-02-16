"use client"

import { useSidebar } from "@/context/Sidebar"
import Link from "next/link"
import Modal from "./Modal"
import UList from "./UList"

export default () => {
    
    const { isOpen, toggle } = useSidebar()

    return isOpen && (
        <Modal toggler={toggle}>
            <aside className="bg-dark-blue/80 h-screen w-10/12 backdrop-blur p-4 animate-slide">
                <UList
                    className="grid gap-2"
                    items={[{name: "Movies", id: "movie"}, {name: "TV Shows", id: "tv"}]}
                    itemHandler={({ name, id }) => (
                        <Link
                            href={`/${id}`}
                            className="text-xl font-semibold"
                        >{name}</Link>
                    )}
                />
                <UList
                    className="grid gap-1 py-4"
                    items={[{name: "About", id: "about"}, {name: "Support", id: "support"}]}
                    itemHandler={({ name, id }) => (
                        <Link className="font-medium opacity-50" href={`/${id}`}>{name}</Link>
                    )}
                />
                <div>
                    <Link className="font-medium opacity-50" href={`/logout`}>Logout</Link>
                </div>
            </aside>
        </Modal>
    )
}