interface CenterTitleInterface {
    text: string
}

export function CenterTitle(props: CenterTitleInterface) {
    return (
        <h1 className="text-xl flex justify-center py-4 font-bold">
            {props.text}
        </h1>
    )
}
