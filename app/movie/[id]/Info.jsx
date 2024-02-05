"use client"

import { useExtractColor } from "react-extract-colors"

export default () => {

    const img = "https://media.themoviedb.org/t/p/w220_and_h330_face/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"
    
    const { dominantColor, darkerColor, lighterColor } = useExtractColor(img)

    console.log(dominantColor, darkerColor, lighterColor)

    return (
        <div style={{ backgroundColor: `linear-gradient(45deg, ${dominantColor}, ${darkerColor}, ${lighterColor})` }}>
            <h1>Extract Color</h1>
            <img src={img} alt="random image" width="200" height="300" />
        </div>
    )

}