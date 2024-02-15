import { query } from "@/lib/base"

export const getAll = async (time = "day") => query(`trending/all/${time}`)
