"use client"

export default ({ children, className, toggler }) => <>
    <div className="fixed h-full w-full top-0 left-0 bg-black/50" onClick={toggler}></div>
    <div className={`fixed w-full bottom-0 left-0 bg-[#596f7c] p-4 z-10${className ? " " + className : ""}`}>
        {children}
    </div>
</>