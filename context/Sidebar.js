"use client" 
import { createContext, useContext, useState } from "react"

const SidebarContext = createContext()

export const useSidebar = () => useContext(SidebarContext)

export const SidebarProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => setIsOpen(!isOpen)

    return <SidebarContext.Provider
        value={{
            isOpen,
            toggle
        }}
    >
        {children}
    </SidebarContext.Provider>
}