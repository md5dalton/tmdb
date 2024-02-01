
export default ({ percent }) => {

    return (
        <div
            style={{
                borderRadius: "100%",

                boxShadow: "0px 0px 0px 3px black",
                background: "#444 linear-gradient(to right, transparent 50%, #32de84 0)"
            }}
            className="relative w-10 h-10 text-white p-[3px]"
        >
            <div
                style={{
                    background: percent < 50 ? "#444" : "#32de84",
                    transformOrigin: "left",
                    borderRadius: "0 100% 100% 0/50%",
                    transform: `rotate(calc(${percent - (percent < 50 ? 0 : 50)} * 0.01turn))`
                }}
                className="h-full ml-[50%]"
            ></div>
            <div
                style={{
                    height: "calc(100%)",
                    width: "calc(100%)",
                    borderRadius: "100%"
                }}
                className=" bg-black"
            ></div>
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p>{percent}%</p>
            </div> */}
        </div>
    )
}