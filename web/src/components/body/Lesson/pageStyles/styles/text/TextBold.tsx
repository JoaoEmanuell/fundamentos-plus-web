import { StyleInterface } from '../StyleInterface'

export function TextBoldStyle(props: StyleInterface) {
    return (
        <p className={`text-center font-bold ${props.className}`}>
            {props.content}
        </p>
    )
}
