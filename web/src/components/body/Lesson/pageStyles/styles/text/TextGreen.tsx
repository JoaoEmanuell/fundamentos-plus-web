import { StyleInterface } from '../StyleInterface'

export function TextGreenStyle(props: StyleInterface) {
    return (
        <p
            className={`text-center text-base text-greenText font-semibold ${props.className}`}
        >
            {props.content}
        </p>
    )
}
