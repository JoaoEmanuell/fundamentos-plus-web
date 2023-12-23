interface GreenButtonInterface {
    text: string
    enable?: boolean
}

export function NumberGreenButton(props: GreenButtonInterface) {
    if (props.enable && props.enable === true) {
        return <span className="green-button-not-connected">{props.text}</span>
    } else {
        return (
            <span className="green-button-disabled-not-connected">
                {props.text}
            </span>
        )
    }
}
