import { getBackdrop, getImage } from "@/lib/images"
import Image from "next/image"

export default () => {
    const bd = "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg"

    return (
        <div
            className="h-[calc(100vw/2.22222)] bg-cover bg-no-repeat relative"
            style={{
                backgroundPosition: "calc((((100vw/2.22222) - 20px)/1.5)/2) 0",
                backgroundImage: `url(${getBackdrop(bd)})`
            }}
        >
            <div className="absolute h-full w-full bg-gradient-to-r from-vibrant-dark-blue from-20% to-50%"></div>
            <div className="h-[calc((100vw/2.2222)-40px)] w-[calc(((100vw/2.2222)-40px)/1.5)] relative top-5 left-5">
                <Image
                    src={getImage("/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg")}
                    className="bg-black/50 rounded-lg"
                    fill
                />
            </div>
        </div>
    )
}