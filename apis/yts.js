import { request } from "@/lib/base"
import { API_URL } from "@/lib/config.yts"

export const query  = async id => await request(API_URL + id)