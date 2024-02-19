"use client"

import { useSidebar } from "@/context/Sidebar"
import {
    Bars2Icon,
} from "@heroicons/react/24/solid"

export default props => {

    const { toggle } = useSidebar()

    return (
        <button onClick={toggle} {...props}>
            <Bars2Icon className="h-6" />
        </button>
    )
}