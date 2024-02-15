import UList from "@/components/UList"

export default () => (
    <UList
        className="grid grid-cols-2 p-4 gap-4"
        items={[{title: "director", name: "letsie one"}, {title: "writer", name: "joel angel"}, {title: "writer", name: "kelly tall"}]}
        itemHandler={({ name, title }) => (
            <div className="capitalize">
                <h2 className="font-semibold text-lg">{name}</h2>
                <p>{title}</p>
            </div>
        )}
    />
)