import { query } from "@/apis/tmdb"

export const getAll = async (time = "day") => await query(`trending/all/${time}`)
