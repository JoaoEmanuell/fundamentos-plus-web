import { StyleInterface } from '../StyleInterface'

export function GreenSubTitleStyle(props: StyleInterface) {
    return (
        <h1
            className={`text-lg font-bold text-greenButton text-center ${props.className}`}
        >
            {props.content}
        </h1>
    )
}
