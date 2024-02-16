import { query } from "@/apis/tmdb"

export const details = async id => await query(`movie/${id}`)
