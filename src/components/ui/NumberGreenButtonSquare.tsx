interface GreenButtonSquareProps {
    text: string
    enable?: boolean
}

export function NumberGreenButtonSquare(props: GreenButtonSquareProps) {
    if (props.enable && props.enable === true) {
        return (
            <span className="green-button-square-not-connected">
                {props.text}
            </span>
        )
    } else {
        return (
            <span className="green-button-square-disabled-not-connected">
                {props.text}
            </span>
        )
    }
}
