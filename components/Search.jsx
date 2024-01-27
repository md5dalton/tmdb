"use client"

import { useSearch } from "@/context/Search"
import Modal from "./Modal"

export default () => {
    
    const { isOpen, toggle } = useSearch()

    return isOpen && (
        <Modal toggler={toggle}>
            <aside>
                search {isOpen}
            </aside>
        </Modal>
    )
}