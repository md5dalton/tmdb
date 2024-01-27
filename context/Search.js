"use client" 
import { createContext, useContext, useState } from "react"

const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => setIsOpen(!isOpen)

    return <SearchContext.Provider
        value={{
            isOpen,
            toggle
        }}
    >
        {children}
    </SearchContext.Provider>
}