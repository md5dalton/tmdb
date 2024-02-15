import { format } from "date-fns"

export const formatDate = (input, options = "MMM d, yyyy") => {
    
    const inputDate = new Date(input)

    return format(inputDate, options)
    
}

export const formatMinutes = minutes => {

    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
  
    const hoursString = hours > 0 ? `${hours}h` : ""
    const minutesString = remainingMinutes > 0 ? `${remainingMinutes}m` : ""
  
    return `${hoursString} ${minutesString}`.trim()

}