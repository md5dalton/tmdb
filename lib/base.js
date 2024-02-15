import { API_OPTIONS, API_URL } from "./config"

export const query  = async path => {
    
    try {

        const req = await fetch(
            API_URL + path + "?language=en-US", 
            API_OPTIONS
        )
        
        return await req.json()

    } catch (error) {
        
        return {error}

    }

}