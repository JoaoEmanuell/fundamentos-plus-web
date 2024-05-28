interface GreenButtonInterface {
    text: string
    enable?: boolean
}

export function NumberGreenButton(props: GreenButtonInterface) {
    let styleTextSize
    if (!isNaN(props.text as unknown as number)) {
        const number = Number(props.text)
        if (number >= 100) {
            styleTextSize = { fontSize: '25px' }
        }
    }
    if (props.enable && props.enable === true) {
        return (
            <span className="green-button-not-connected" style={styleTextSize}>
                {props.text}
            </span>
        )
    } else {
        return (
            <span
                className="green-button-disabled-not-connected"
                style={styleTextSize}
            >
                {props.text}
            </span>
        )
    }
}
