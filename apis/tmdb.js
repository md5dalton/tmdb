import { request } from "@/lib/base"
import { API_OPTIONS, API_URL } from "@/lib/config.tmdb"

export const query  = async path => await request(
    API_URL + path + "?language=en-US", 
    API_OPTIONS
)