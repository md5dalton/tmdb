import { getImage } from "@/lib/images"
import Image from "next/image"
// import { ColorExtractor } from "react-color-extractor"
import Info from "./Info"

export default () => {
    
    return (
        <section>
            <div className="h-20 w-20 relative">
                {/* <ColorExtractor getColors={colors => console.log(colors)}>
                    <Image
                        src={getImage("/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg")}
                        className="h-full w-full bg-black/50 rounded-lg"
                        fill
                    />
                </ColorExtractor> */}
                <Info />
            </div>
        </section>
    )
}