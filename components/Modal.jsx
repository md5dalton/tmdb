"use client"

export default ({ children, className, toggler }) => <>
    <div className="fixed h-full w-full top-0 left-0 z-50" onClick={toggler}></div>
    <div className={`fixed w-full z-50${className ? " " + className : ""}`}>
        {children}
    </div>
</>