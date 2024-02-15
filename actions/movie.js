import { query } from "@/lib/base"

export const details = async id => query(`movie/${id}`)
