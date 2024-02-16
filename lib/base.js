export const request  = async (path, options) => {
    
    try {

        const req = await fetch(path, options)
        
        return await req.json()

    } catch (error) {
        
        return {error}

    }

}