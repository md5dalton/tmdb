"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default ({ children, activeClassName, className, href, ...props }) => {

    const searchParams = useSearchParams()
 
    const search = searchParams.get('search')
   
    const router = useRouter()
    const pathname = usePathname()
    const active = pathname === props.href 
    console.log(pathname, router)
    // const active = pathname.startsWith(props.href) 

    return (
        <Link {...props} className={`${className ? className : ""}${active ? " " + activeClassName : ""}`} >
            {children}
        </Link>
    )
}