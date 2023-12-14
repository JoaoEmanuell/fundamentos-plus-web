import { StyleInterface } from '../StyleInterface'

export function TextStyle(props: StyleInterface) {
    return (
        <p className={`text-justify text-base ${props.className}`}>
            {props.content}
        </p>
    )
}
