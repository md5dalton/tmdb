import { API_OPTIONS, API_URL } from "@/lib/config"

const query  = async path => {
    
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

export const getAll = async (time = "day") => query(`trending/all/${time}`)
