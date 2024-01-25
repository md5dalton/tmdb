"use client"

import { useSidebar } from "@/context/Sidebar"
import Modal from "./Modal"

export default () => {
    
    const { isOpen, toggle } = useSidebar()

    return isOpen && (
        <Modal toggler={toggle}>
            <aside>
                sidebar {isOpen}
            </aside>
        </Modal>
    )
}