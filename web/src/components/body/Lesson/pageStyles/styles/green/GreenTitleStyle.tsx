import { StyleInterface } from '../StyleInterface'

export function GreenTitleStyle(props: StyleInterface) {
    return (
        <h1
            className={`text-2xl font-bold text-greenButton text-center ${props.className}`}
        >
            {props.content}
        </h1>
    )
}
