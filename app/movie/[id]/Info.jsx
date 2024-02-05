"use client"

import { useExtractColor } from "react-extract-colors"

export default () => {

    const img = "https://media.themoviedb.org/t/p/w220_and_h330_face/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
    
    const { dominantColor, darkerColor, lighterColor } = useExtractColor(img)

}