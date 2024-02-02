import { format } from "date-fns"

export const formatDate = input => {

    const inputDate = new Date(input)

    return format(inputDate, "MMM d, yyyy")
    
    // console.log(formattedDate); // Output: Jan 10, 2024
    

    // const options = { year: "numeric", month: "short", day: "numeric" }

    // return new Intl.DateTimeFormat("en-US", options).format(inputDate)

}