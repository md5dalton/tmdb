
export default ({ percent }) => {

    return (
        <div
            style={{
                borderRadius: "100%",

                boxShadow: "0px 0px 0px 4px #081c22",
                background: "rgb(0,118,241) linear-gradient(to right, transparent 50%, rgb(30,230,169) 0)"
            }}
            className="relative w-10 h-10 text-white grid place-items-center"
        >
            <div
                style={{
                    gridRow: 1,
                    gridColumn: 1,
                    background: percent < 50 ? "rgb(0,118,241)" : "rgb(30,230,169)",
                    transformOrigin: "left",
                    borderRadius: "0 100% 100% 0/50%",
                    transform: `rotate(calc(${percent - (percent < 50 ? 0 : 50)} * 0.01turn))`
                }}
                className="h-full ml-[50%] w-1/2"
            ></div>
            <div
                style={{
                    gridRow: 1,
                    gridColumn: 1,
                    height: "calc(100% - 5px)",
                    width: "calc(100% - 5px)",
                    borderRadius: "100%",
                    zIndex: 1
                }}
                className=" bg-[#081c22]"
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p className="flex leading-[100%] items-center">
                    <span className="font-semibold text-lg">{percent}</span>
                    <span className="text-[8px]">%</span>
                </p>
            </div>
        </div>
    )
}